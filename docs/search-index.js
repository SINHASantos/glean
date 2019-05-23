var N=null,E="",T="t",U="u",searchIndex={};
var R=["glean_core","commonmetricdata","test_get_value","Test-only API (exported for FFI purposes).","glean","option","string","should_record","category","jsonvalue","database","snapshot","result","to_string","try_from","borrow_mut","try_into","type_id","borrow","typeid","glean_core::metrics","to_owned","clone_into","glean_core::ping","glean_core::storage","lifetime","default","errorkind","formatter","backtrace","CommonMetricData","Lifetime","ErrorType","BooleanMetric","CounterMetric","StringMetric","StringListMetric","UuidMetric","MetricType","PingMaker","StorageManager","glean_ffi","ffistr","externerror"];
searchIndex[R[41]]={"doc":E,"i":[[5,"glean_initialize",R[41],E,N,[[[R[42]],[R[42]]],["u64"]]],[5,"glean_is_initialized",E,E,N,[[["u64"]],["u8"]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u64"],["u8"]]]],[5,"glean_send_ping",E,E,N,[[["u64"],[R[42]],["u8"]],["u8"]]],[5,"glean_new_boolean_metric",E,E,N,N],[5,"glean_new_string_metric",E,E,N,N],[5,"glean_new_counter_metric",E,E,N,N],[5,"glean_counter_should_record",E,E,N,[[["u64"],["u64"]],["u8"]]],[5,"glean_counter_add",E,E,N,[[["u64"],["u64"],["i32"]]]],[5,"glean_counter_test_has_value",E,E,N,[[["u64"],["u64"],[R[42]]],["u8"]]],[5,"glean_counter_test_get_value",E,E,N,[[["u64"],["u64"],[R[42]]],["i32"]]],[5,"glean_boolean_should_record",E,E,N,[[["u64"],["u64"]],["u8"]]],[5,"glean_boolean_set",E,E,N,[[["u64"],["u64"],["u8"]]]],[5,"glean_boolean_test_has_value",E,E,N,[[["u64"],["u64"],[R[42]]],["u8"]]],[5,"glean_boolean_test_get_value",E,E,N,[[["u64"],["u64"],[R[42]]],["u8"]]],[5,"glean_string_should_record",E,E,N,[[["u64"],["u64"]],["u8"]]],[5,"glean_string_set",E,E,N,[[["u64"],["u64"],[R[42]]]]],[5,"glean_string_test_has_value",E,E,N,[[["u64"],["u64"],[R[42]]],["u8"]]],[5,"glean_string_test_get_value",E,E,N,N],[5,"glean_ping_collect",E,E,N,N],[5,"glean_destroy_glean",E,E,N,[[["u64"],[R[43]]]]],[5,"glean_destroy_boolean_metric",E,E,N,[[["u64"],[R[43]]]]],[5,"glean_destroy_string_metric",E,E,N,[[["u64"],[R[43]]]]],[5,"glean_destroy_counter_metric",E,E,N,[[["u64"],[R[43]]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,N]],"p":[]};
searchIndex[R[0]]={"doc":E,"i":[[3,R[30],R[0],E,N,N],[12,"name",E,E,0,N],[12,R[8],E,E,0,N],[12,"send_in_pings",E,E,0,N],[12,R[25],E,E,0,N],[12,"disabled",E,E,0,N],[3,"Error",E,"A specialized [`Error`] type for this crate's operations.",N,N],[3,"Glean",E,E,N,N],[4,R[31],E,E,N,N],[13,"Ping",E,"The metric is reset with each sent ping",1,N],[13,"Application",E,"The metric is reset on application restart",1,N],[13,"User",E,"The metric is reset with each user profile",1,N],[4,R[32],E,E,N,N],[13,"InvalidValue",E,E,2,N],[13,"InvalidLabel",E,E,2,N],[11,"as_str",E,E,1,[[["self"]],["str"]]],[11,"new",E,"Create a new metadata object",0,[[["a"],["b"],["c"]],[R[1]]]],[11,"identifier",E,E,0,[[["self"]],[R[6]]]],[11,R[7],E,E,0,[[["self"]],["bool"]]],[11,"storage_names",E,E,0,N],[11,"kind",E,"Access the [`ErrorKind`] member.",3,[[["self"]],[R[27]]]],[11,R[13],E,E,2,[[["self"]],["str"]]],[0,"metrics",E,E,N,N],[3,R[33],R[20],E,N,N],[3,R[34],E,E,N,N],[3,R[35],E,E,N,N],[3,R[36],E,E,N,N],[3,R[37],E,E,N,N],[4,"Metric",E,E,N,N],[13,"String",E,E,4,N],[13,"Boolean",E,E,4,N],[13,"Counter",E,E,4,N],[13,"Uuid",E,E,4,N],[13,"StringList",E,E,4,N],[11,"new",E,E,5,[[[R[1]]],["self"]]],[11,"set",E,E,5,[[["self"],[R[4]],["bool"]]]],[11,R[2],E,R[3],5,[[["self"],[R[4]],["str"]],[R[5],["bool"]]]],[11,"new",E,E,6,[[[R[1]]],["self"]]],[11,"add",E,E,6,[[["self"],[R[4]],["i32"]]]],[11,R[2],E,R[3],6,[[["self"],[R[4]],["str"]],[R[5],["i32"]]]],[11,"new",E,E,7,[[[R[1]]],["self"]]],[11,"set",E,E,7,[[["self"],[R[4]],["s"]]]],[11,R[2],E,R[3],7,[[["self"],[R[4]],["str"]],[R[5],[R[6]]]]],[11,"new",E,E,8,[[[R[1]]],["self"]]],[11,"add",E,E,8,[[["self"],[R[4]],["s"]]]],[11,"set",E,E,8,[[["self"],[R[4]],["vec",[R[6]]]]]],[11,"new",E,E,9,[[[R[1]]],["self"]]],[11,"set",E,E,9,[[["self"],[R[4]],["uuid"]]]],[11,"generate",E,E,9,[[["self"],[R[4]]],["uuid"]]],[11,"generate_if_missing",E,E,9,[[["self"],[R[4]]]]],[8,R[38],E,E,N,N],[10,"meta",E,E,10,[[["self"]],[R[1]]]],[11,R[7],E,E,10,[[["self"],[R[4]]],["bool"]]],[11,R[8],E,E,4,[[["self"]],["str"]]],[11,"as_json",E,E,4,[[["self"]],[R[9]]]],[0,"ping",R[0],E,N,N],[3,R[39],R[23],E,N,N],[11,"new",E,E,11,[[],["self"]]],[11,"collect",E,E,11,[[["self"],[R[10]],["str"]],[R[5],[R[9]]]]],[11,"collect_string",E,E,11,[[["self"],[R[10]],["str"]],[R[5],[R[6]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",11,[[["self"],["str"],["path"],["str"],[R[9]]],[R[12]]]],[0,"storage",R[0],E,N,N],[3,R[40],R[24],E,N,N],[11,R[11],E,E,12,[[["self"],[R[10]],["str"],["bool"]],[R[5],[R[6]]]]],[11,"snapshot_as_json",E,E,12,[[["self"],[R[10]],["str"],["bool"]],[R[5],[R[9]]]]],[6,"Result",R[0],"A specialized [`Result`] type for this crate's operations.",N,N],[11,"new",E,"Initialize the global Glean object.",13,[[["str"],["str"]],[R[12]]]],[11,"is_initialized",E,"Determine whether the global Glean object is fully…",13,[[["self"]],["bool"]]],[11,"set_upload_enabled",E,"Set whether upload is enabled or not.",13,[[["self"],["bool"]]]],[11,"is_upload_enabled",E,"Determine whether upload is enabled.",13,[[["self"]],["bool"]]],[11,"get_application_id",E,E,13,[[["self"]],["str"]]],[11,"get_data_path",E,E,13,[[["self"]],["path"]]],[11,"storage",E,E,13,[[["self"]],[R[10]]]],[11,R[11],E,E,13,[[["self"],["str"],["bool"]],[R[6]]]],[11,"send_ping",E,"Send a ping by name.",13,[[["self"],["str"],["bool"]],[R[12],["bool"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[14],E,E,0,[[[U]],[R[12]]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[["self"]],[R[19]]]],[11,R[15],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[12]]]],[11,R[13],E,E,3,[[["self"]],[R[6]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[14],E,E,3,[[[U]],[R[12]]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[["self"]],[R[19]]]],[11,R[15],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[R[12]]]],[11,"as_fail",E,E,3,[[["self"]],["fail"]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[14],E,E,13,[[[U]],[R[12]]]],[11,R[18],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,[[["self"]],[R[19]]]],[11,R[15],E,E,13,[[["self"]],[T]]],[11,R[16],E,E,13,[[["self"]],[R[12]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[21],E,E,1,[[["self"]],[T]]],[11,R[22],E,E,1,N],[11,R[14],E,E,1,[[[U]],[R[12]]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[["self"]],[R[19]]]],[11,R[15],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[R[12]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[14],E,E,2,[[[U]],[R[12]]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[["self"]],[R[19]]]],[11,R[15],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[R[12]]]],[11,"from",R[20],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[14],E,E,5,[[[U]],[R[12]]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,[[["self"]],[R[19]]]],[11,R[15],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[R[12]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[14],E,E,6,[[[U]],[R[12]]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,[[["self"]],[R[19]]]],[11,R[15],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[R[12]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[["self"]],[U]]],[11,R[14],E,E,7,[[[U]],[R[12]]]],[11,R[18],E,E,7,[[["self"]],[T]]],[11,R[17],E,E,7,[[["self"]],[R[19]]]],[11,R[15],E,E,7,[[["self"]],[T]]],[11,R[16],E,E,7,[[["self"]],[R[12]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[["self"]],[U]]],[11,R[14],E,E,8,[[[U]],[R[12]]]],[11,R[18],E,E,8,[[["self"]],[T]]],[11,R[17],E,E,8,[[["self"]],[R[19]]]],[11,R[15],E,E,8,[[["self"]],[T]]],[11,R[16],E,E,8,[[["self"]],[R[12]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[["self"]],[U]]],[11,R[14],E,E,9,[[[U]],[R[12]]]],[11,R[18],E,E,9,[[["self"]],[T]]],[11,R[17],E,E,9,[[["self"]],[R[19]]]],[11,R[15],E,E,9,[[["self"]],[T]]],[11,R[16],E,E,9,[[["self"]],[R[12]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[21],E,E,4,[[["self"]],[T]]],[11,R[22],E,E,4,N],[11,R[14],E,E,4,[[[U]],[R[12]]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,[[["self"]],[R[19]]]],[11,R[15],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[R[12]]]],[11,"to_bytes",E,E,4,[[["self"]],[R[12],["vec","dataerror"]]]],[11,"from",R[23],E,11,[[[T]],[T]]],[11,"into",E,E,11,[[["self"]],[U]]],[11,R[14],E,E,11,[[[U]],[R[12]]]],[11,R[18],E,E,11,[[["self"]],[T]]],[11,R[17],E,E,11,[[["self"]],[R[19]]]],[11,R[15],E,E,11,[[["self"]],[T]]],[11,R[16],E,E,11,[[["self"]],[R[12]]]],[11,"from",R[24],E,12,[[[T]],[T]]],[11,"into",E,E,12,[[["self"]],[U]]],[11,R[14],E,E,12,[[[U]],[R[12]]]],[11,R[18],E,E,12,[[["self"]],[T]]],[11,R[17],E,E,12,[[["self"]],[R[19]]]],[11,R[15],E,E,12,[[["self"]],[T]]],[11,R[16],E,E,12,[[["self"]],[R[12]]]],[11,"meta",R[20],E,5,[[["self"]],[R[1]]]],[11,"meta",E,E,6,[[["self"]],[R[1]]]],[11,"meta",E,E,7,[[["self"]],[R[1]]]],[11,"eq",R[0],E,1,[[["self"],[R[25]]],["bool"]]],[11,R[26],E,E,1,[[],["self"]]],[11,R[26],E,E,0,[[],[R[1]]]],[11,R[26],R[23],E,11,[[],["self"]]],[11,"clone",R[0],E,1,[[["self"]],[R[25]]]],[11,"clone",R[20],E,4,[[["self"]],["metric"]]],[11,"from",R[0],E,3,[[["context",[R[27]]]],["error"]]],[11,"from",E,E,3,[[["handleerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"from",E,E,3,[[["storeerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"fmt",E,E,3,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,1,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,0,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,3,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,2,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",R[20],E,5,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,6,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,7,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,8,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,9,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",E,E,4,[[["self"],[R[28]]],[R[12]]]],[11,"fmt",R[0],E,13,[[["self"],[R[28]]],[R[12]]]],[11,R[14],E,E,1,[[["i32"]],[R[12],[R[25]]]]],[11,"serialize",R[20],E,4,[[["self"],["__s"]],[R[12]]]],[11,"deserialize",E,E,4,[[["__d"]],[R[12]]]],[11,"cause",R[0],E,3,[[["self"]],[R[5],["fail"]]]],[11,R[29],E,E,3,[[["self"]],[R[5],[R[29]]]]]],"p":[[3,R[30]],[4,R[31]],[4,R[32]],[3,"Error"],[4,"Metric"],[3,R[33]],[3,R[34]],[3,R[35]],[3,R[36]],[3,R[37]],[8,R[38]],[3,R[39]],[3,R[40]],[3,"Glean"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);