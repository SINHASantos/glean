/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package mozilla.telemetry.glean.private

import androidx.annotation.VisibleForTesting
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import mozilla.telemetry.glean.Dispatchers
import mozilla.telemetry.glean.internal.ObjectMetric
import mozilla.telemetry.glean.testing.ErrorType

/**
 * An object that can be serialized into JSON.
 *
 * Objects are defined by their structure in the metrics definition.
 */
interface ObjectSerialize {
    fun intoSerializedObject(): String
}

/**
 * This implements the developer facing API for the object metric type.
 *
 * Instances of this class type are automatically generated by the parsers at built time,
 * allowing developers to record events that were previously registered in the metrics.yaml file.
 *
 * The object API only exposes the [set] method.
 * Only the associated object structure can be recorded.
 */
class ObjectMetricType<K> constructor(
    private var meta: CommonMetricData,
) where K : ObjectSerialize {
    val inner: ObjectMetric by lazy { ObjectMetric(meta) }

    /**
     * Sets to the associated structure.
     *
     * @param obj The object to set.
     */
    fun set(obj: K) {
        Dispatchers.Delayed.launch {
            inner.setString(obj.intoSerializedObject())
        }
    }

    /**
     * Returns the stored value for testing purposes only. This function will attempt to await the
     * last task (if any) writing to the the metric's storage engine before returning a value.
     *
     * @param pingName represents the name of the ping to retrieve the metric for.
     *                 Defaults to the first ping listed in `send_in_pings` in the metric definition.
     * @return value of the stored object as a JSON value
     */
    @VisibleForTesting(otherwise = VisibleForTesting.NONE)
    @JvmOverloads
    fun testGetValue(pingName: String? = null): JsonElement? {
        return inner.testGetValue(pingName)?.let {
            return Json.decodeFromString(it)
        }
    }

    /**
     * Returns the number of errors recorded for the given metric.
     *
     * @param errorType The type of the error recorded.
     * @return the number of errors recorded for the metric.
     */
    @VisibleForTesting(otherwise = VisibleForTesting.NONE)
    fun testGetNumRecordedErrors(errorType: ErrorType) = inner.testGetNumRecordedErrors(errorType)
}
