/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package mozilla.telemetry.glean.private

import androidx.annotation.VisibleForTesting
import mozilla.telemetry.glean.Dispatchers
import mozilla.telemetry.glean.internal.EventMetric
import mozilla.telemetry.glean.testing.ErrorType

/**
 * A class that can be converted into key-value pairs of event extras.
 * This will be automatically implemented for event properties of an [EventMetricType].
 */
interface EventExtras {
    /**
     * Convert the event extras into 2 lists:
     *
     * 1. The list of extra key indices.
     *    Unset keys will be skipped.
     * 2. The list of extra values.
     */
    fun toExtraRecord(): Map<String, String>
}

/**
 * An object with no values for convenient use as the default set of extra keys
 * that an [EventMetricType] can accept.
 */
class NoExtras : EventExtras {
    override fun toExtraRecord(): Map<String, String> {
        return emptyMap()
    }
}

/**
 * This implements the developer facing API for recording events.
 *
 * Instances of this class type are automatically generated by the parsers at built time,
 * allowing developers to record events that were previously registered in the metrics.yaml file.
 *
 * The Events API only exposes the [record] method, which takes care of validating the input
 * data and making sure that limits are enforced.
 */
class EventMetricType<ExtraObject> constructor(
    private var meta: CommonMetricData,
    private var allowedExtraKeys: List<String>,
) where ExtraObject : EventExtras {
    val inner: EventMetric by lazy { EventMetric(meta, allowedExtraKeys) }

    /**
     * Record an event by using the information provided by the instance of this class.
     *
     * @param extra The event extra properties.
     *              Values are converted to strings automatically
     *              This is used for events where additional richer context is needed.
     *              The maximum length for values is 100 bytes.
     *
     * Note: `extra` is not optional here to avoid overlapping with the above definition of `record`.
     *       If no `extra` data is passed the above function will be invoked correctly.
     */
    fun record(extra: ExtraObject? = null) {
        Dispatchers.Delayed.launch {
            inner.record(extra?.toExtraRecord() ?: emptyMap())
        }
    }

    /**
     * Returns the stored value for testing purposes only. This function will attempt to await the
     * last task (if any) writing to the the metric's storage engine before returning a value.
     *
     * @param pingName represents the name of the ping to retrieve the metric for.
     *                 Defaults to the first value in `sendInPings`.
     * @return value of the stored events
     */
    @VisibleForTesting(otherwise = VisibleForTesting.NONE)
    @JvmOverloads
    fun testGetValue(pingName: String? = null): List<RecordedEvent>? {
        return inner.testGetValue(pingName)
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
