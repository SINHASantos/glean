/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package mozilla.telemetry.glean.private

import androidx.test.core.app.ApplicationProvider
import mozilla.telemetry.glean.testing.ErrorType
import mozilla.telemetry.glean.testing.GleanTestRule
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner

@RunWith(RobolectricTestRunner::class)
class MemoryDistributionMetricTypeTest {
    @get:Rule
    val gleanRule = GleanTestRule(ApplicationProvider.getApplicationContext())

    @Test
    fun `The API saves to its storage engine`() {
        // Define a memory distribution metric which will be stored in "store1"
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution",
                sendInPings = listOf("store1"),
            ),
            memoryUnit = MemoryUnit.KILOBYTE,
        )

        // Accumulate a few values
        for (i in 1L..3L) {
            metric.accumulate(i)
        }

        val kb = 1024

        // Check that data was properly recorded.
        val snapshot = metric.testGetValue()!!
        // Check the sum
        assertEquals(1L * kb + 2L * kb + 3L * kb, snapshot.sum)
        // Check that the 1L fell into the first value bucket
        assertEquals(1L, snapshot.values[1023])
        // Check that the 2L fell into the second value bucket
        assertEquals(1L, snapshot.values[2047])
        // Check that the 3L fell into the third value bucket
        assertEquals(1L, snapshot.values[3024])
    }

    @Test
    fun `values are truncated to 1TB`() {
        // Define a memory distribution metric which will be stored in "store1"
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution",
                sendInPings = listOf("store1"),
            ),
            memoryUnit = MemoryUnit.GIGABYTE,
        )

        metric.accumulate(2048L)

        // Check that data was properly recorded.
        val snapshot = metric.testGetValue()!!
        // Check the sum
        assertEquals(1L shl 40, snapshot.sum)
        // Check that the 1L fell into 1TB bucket
        assertEquals(1L, snapshot.values[((1L shl 40) - 1)])
        // Check that an error was recorded
        assertEquals(1, metric.testGetNumRecordedErrors(ErrorType.INVALID_VALUE))
    }

    @Test
    fun `disabled memory distributions must not record data`() {
        // Define a memory distribution metric which will be stored in "store1"
        // It's lifetime is set to Lifetime.PING SO IT SHOULD NOT RECORD ANYTHING.
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = true,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution",
                sendInPings = listOf("store1"),
            ),
            memoryUnit = MemoryUnit.KILOBYTE,
        )

        metric.accumulate(1L)

        // Check that nothing was recorded.
        assertNull(
            "MemoryDistributions without a lifetime should not record data.",
            metric.testGetValue(),
        )
    }

    @Test
    fun `testGetValue() returns null if nothing is stored`() {
        // Define a memory distribution metric which will be stored in "store1"
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution",
                sendInPings = listOf("store1"),
            ),
            memoryUnit = MemoryUnit.KILOBYTE,
        )
        assertNull(metric.testGetValue())
    }

    @Test
    fun `The API saves to secondary pings`() {
        // Define a memory distribution metric which will be stored in multiple stores
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution",
                sendInPings = listOf("store1", "store2", "store3"),
            ),
            memoryUnit = MemoryUnit.KILOBYTE,
        )

        // Accumulate a few values
        for (i in 1L..3L) {
            metric.accumulate(i)
        }

        // Check that data was properly recorded in the second ping.
        val snapshot = metric.testGetValue("store2")!!
        // Check the sum
        assertEquals(6144L, snapshot.sum)
        // Check that the 1L fell into the first bucket
        assertEquals(1L, snapshot.values[1023])
        // Check that the 2L fell into the second bucket
        assertEquals(1L, snapshot.values[2047])
        // Check that the 3L fell into the third bucket
        assertEquals(1L, snapshot.values[3024])

        // Check that data was properly recorded in the third ping.
        val snapshot2 = metric.testGetValue("store3")!!
        // Check the sum
        assertEquals(6144L, snapshot2.sum)
        // Check that the 1L fell into the first bucket
        assertEquals(1L, snapshot2.values[1023])
        // Check that the 2L fell into the second bucket
        assertEquals(1L, snapshot2.values[2047])
        // Check that the 3L fell into the third bucket
        assertEquals(1L, snapshot2.values[3024])
    }

    @Test
    fun `The accumulateSamples API correctly stores memory values`() {
        // Define a memory distribution metric which will be stored in multiple stores
        val metric = MemoryDistributionMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.PING,
                name = "memory_distribution_samples",
                sendInPings = listOf("store1"),
            ),
            memoryUnit = MemoryUnit.KILOBYTE,
        )

        // Accumulate a few values
        val testSamples = (1L..3L).toList()
        metric.accumulateSamples(testSamples)

        // Check that data was properly recorded in the second ping.
        val snapshot = metric.testGetValue("store1")!!
        // Check the sum
        val kb = 1024L
        assertEquals(6L * kb, snapshot.sum)

        // We should get a sample in 3 buckets.
        // These numbers are a bit magic, but they correspond to
        // `hist.sample_to_bucket_minimum(i * kb)` for `i = 1..=3`,
        // which lives in the Rust code.
        assertEquals(1L, snapshot.values[1023])
        assertEquals(1L, snapshot.values[2047])
        assertEquals(1L, snapshot.values[3024])
    }
}
