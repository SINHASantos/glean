/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// This implements the developer facing API for labeled metrics.
///
/// Instances of this class type are automatically generated by the parsers at build time,
/// allowing developers to record values that were previously registered in the metrics.yaml file.
///
/// Unlike most metric types, LabeledMetricType does not have its own corresponding storage engine,
/// but records metrics for the underlying metric type `T` in the storage engine for that type.
/// The only difference is that labeled metrics are stored with the special key `$category.$name/$label`.
public class LabeledMetricType<T> {
    let disabled: Bool
    let sendInPings: [String]
    let subMetric: T
    let inner: AnyObject

    /// The public constructor used by automatically generated metrics.
    ///
    /// Supports the following types as sub-metrics:
    /// * `BooleanMetricType`
    /// * `CounterMetricType`
    /// * `StringMetricType`
    ///
    /// Throws an exception when used with unsupported sub-metrics.
    public init(
        category: String,
        name: String,
        sendInPings: [String],
        lifetime: Lifetime,
        disabled: Bool,
        subMetric: T,
        labels: [String]? = nil
    ) throws {
        let meta = CommonMetricData(
            category: category,
            name: name,
            sendInPings: sendInPings,
            lifetime: lifetime,
            disabled: disabled
        )
        self.disabled = disabled
        self.sendInPings = sendInPings
        self.subMetric = subMetric

        switch subMetric {
        case is CounterMetricType:
            self.inner = LabeledCounter(.common(cmd: meta), labels)
        case is BooleanMetricType:
            self.inner = LabeledBoolean(.common(cmd: meta), labels)
        case is StringMetricType:
            self.inner = LabeledString(.common(cmd: meta), labels)
        default:
            throw "Can not create a labeled version of this metric type"
        }
    }

    /// Get the specific metric for a given label.
    ///
    /// If a set of acceptable labels was specified in the metrics.yaml file,
    /// and the given label is not in the set, it will be recorded under the
    /// special `OTHER_LABEL`.
    ///
    /// If a set of acceptable labels was not specified in the metrics.yaml file,
    /// only the first 16 unique labels will be used. After that, any additional
    /// labels will be recorded under the special `OTHER_LABEL` label.
    ///
    /// Labels must be snake_case and less than 30 characters. If an invalid label
    /// is used, the metric will be recorded in the special `OTHER_LABEL` label.
    ///
    /// - parameters:
    ///     * label: The label
    /// - returns: The specific metric for that label
    public subscript(label: String) -> T {

        switch self.inner {
        case is LabeledCounter:
            return (self.inner as! LabeledCounter).get(label) as! T
        case is LabeledBoolean:
            return (self.inner as! LabeledBoolean).get(label) as! T
        case is LabeledString:
            return (self.inner as! LabeledString).get(label) as! T
        default:
            // The constructor will already throw an exception on an unhandled sub-metric type
            assertUnreachable()
        }
    }

    /// Returns the number of errors recorded for the given metric.
    ///
    /// - parameters:
    ///     * errorType: The type of the error recorded.
    /// - returns: the number of errors recorded for the metric.
    public func testGetNumRecordedErrors(_ errorType: ErrorType) -> Int32 {
        switch self.inner {
        case is LabeledCounter:
            return (self.inner as! LabeledCounter).testGetNumRecordedErrors(errorType)
        case is LabeledBoolean:
            return (self.inner as! LabeledBoolean).testGetNumRecordedErrors(errorType)
        case is LabeledString:
            return (self.inner as! LabeledString).testGetNumRecordedErrors(errorType)
        default:
            // The constructor will already throw an exception on an unhandled sub-metric type
            assertUnreachable()
        }
    }
}
