/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package mozilla.telemetry.glean.private

/* This file is based on the tests in the Glean android-components implementation.
 *
 * Care should be taken to not reorder elements in this file so it will be easier
 * to track changes in Glean android-components.
 */

import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import mozilla.telemetry.glean.testing.GleanTestRule
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class BooleanMetricTypeTest {
    @get:Rule
    val gleanRule = GleanTestRule(ApplicationProvider.getApplicationContext())

    @Test
    fun `The API saves to its storage engine`() {
        // Define a 'booleanMetric' boolean metric, which will be stored in "store1"
        val booleanMetric = BooleanMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.APPLICATION,
                name = "boolean_metric",
                sendInPings = listOf("store1"),
            ),
        )

        // Record two booleans of the same type, with a little delay.
        booleanMetric.set(true)
        // Check that data was properly recorded.
        assertTrue(booleanMetric.testGetValue()!!)

        booleanMetric.set(false)
        // Check that data was properly recorded.
        assertFalse(booleanMetric.testGetValue()!!)
    }

    @Test
    fun `disabled booleans must not record data`() {
        // Define a 'booleanMetric' boolean metric, which will be stored in "store1". It's disabled
        // so it should not record anything.
        val booleanMetric = BooleanMetricType(
            CommonMetricData(
                disabled = true,
                category = "telemetry",
                lifetime = Lifetime.APPLICATION,
                name = "booleanMetric",
                sendInPings = listOf("store1"),
            ),
        )

        // Attempt to store the boolean.
        booleanMetric.set(true)
        // Check that nothing was recorded.
        assertNull(booleanMetric.testGetValue())
    }

    @Test
    fun `testGetValue() returns null if nothing is stored`() {
        // Define a 'booleanMetric' boolean metric to have an instance to call
        // testGetValue() on
        val booleanMetric = BooleanMetricType(
            CommonMetricData(
                disabled = true,
                category = "telemetry",
                lifetime = Lifetime.APPLICATION,
                name = "booleanMetric",
                sendInPings = listOf("store1"),
            ),
        )
        assertNull(booleanMetric.testGetValue())
    }

    @Test
    fun `The API saves to secondary pings`() {
        // Define a 'booleanMetric' boolean metric, which will be stored in "store1" and "store2"
        val booleanMetric = BooleanMetricType(
            CommonMetricData(
                disabled = false,
                category = "telemetry",
                lifetime = Lifetime.APPLICATION,
                name = "boolean_metric",
                sendInPings = listOf("store1", "store2"),
            ),
        )

        // Record two booleans of the same type, with a little delay.
        booleanMetric.set(true)
        // Check that data was properly recorded in the second ping
        assertTrue(booleanMetric.testGetValue("store2")!!)

        booleanMetric.set(false)
        // Check that data was properly recorded in the second ping.
        assertFalse(booleanMetric.testGetValue("store2")!!)
    }
}
