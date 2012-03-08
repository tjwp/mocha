var search_data = {"index":{"longSearchIndex":["mocha","mocha::api","mocha::classmethods","mocha::configuration","mocha::expectation","mocha::mock","mocha::objectmethods","mocha::parametermatchers","mocha::parametermatchers::base","mocha::statemachine","mocha::stubbingerror","object","mocha::parametermatchers::base#&()","mocha::parametermatchers#not()","mocha::parametermatchers#all_of()","mocha::configuration::allow()","mocha::classmethods#any_instance()","mocha::parametermatchers#any_of()","mocha::parametermatchers#any_parameters()","mocha::parametermatchers#anything()","mocha::expectation#at_least()","mocha::expectation#at_least_once()","mocha::expectation#at_most()","mocha::expectation#at_most_once()","mocha::statemachine#become()","mocha::parametermatchers#equals()","mocha::mock#expects()","mocha::objectmethods#expects()","mocha::parametermatchers#has_entries()","mocha::parametermatchers#has_entry()","mocha::parametermatchers#has_equivalent_query_string()","mocha::parametermatchers#has_key()","mocha::parametermatchers#has_value()","mocha::expectation#in_sequence()","mocha::parametermatchers#includes()","mocha::parametermatchers#instance_of()","mocha::statemachine#is()","mocha::parametermatchers#is_a()","mocha::statemachine#is_not()","mocha::parametermatchers#kind_of()","mocha::api#mock()","mocha::expectation#multiple_yields()","mocha::expectation#never()","mocha::expectation#once()","mocha::parametermatchers#optionally()","mocha::configuration::prevent()","mocha::expectation#raises()","mocha::parametermatchers#regexp_matches()","mocha::mock#responds_like()","mocha::parametermatchers#responds_with()","mocha::expectation#returns()","mocha::api#sequence()","mocha::statemachine#starts_as()","mocha::api#states()","mocha::api#stub()","mocha::api#stub_everything()","mocha::mock#stubs()","mocha::objectmethods#stubs()","mocha::expectation#then()","mocha::expectation#throws()","mocha::expectation#times()","mocha::expectation#twice()","mocha::mock#unstub()","mocha::objectmethods#unstub()","mocha::configuration::warn_when()","mocha::expectation#when()","mocha::expectation#with()","mocha::parametermatchers#yaml_equivalent()","mocha::expectation#yields()","mocha::parametermatchers::base#|()","","","","",""],"searchIndex":["mocha","api","classmethods","configuration","expectation","mock","objectmethods","parametermatchers","base","statemachine","stubbingerror","object","&()","not()","all_of()","allow()","any_instance()","any_of()","any_parameters()","anything()","at_least()","at_least_once()","at_most()","at_most_once()","become()","equals()","expects()","expects()","has_entries()","has_entry()","has_equivalent_query_string()","has_key()","has_value()","in_sequence()","includes()","instance_of()","is()","is_a()","is_not()","kind_of()","mock()","multiple_yields()","never()","once()","optionally()","prevent()","raises()","regexp_matches()","responds_like()","responds_with()","returns()","sequence()","starts_as()","states()","stub()","stub_everything()","stubs()","stubs()","then()","throws()","times()","twice()","unstub()","unstub()","warn_when()","when()","with()","yaml_equivalent()","yields()","|()","copying","mit-license","readme","release","agiledox"],"info":[["Mocha","","Mocha.html","",""],["Mocha::API","","Mocha/API.html","","<p>Methods added to Test::Unit::TestCase or equivalent.\n"],["Mocha::ClassMethods","","Mocha/ClassMethods.html","","<p>Methods added all classes to allow mocking and stubbing on real objects.\n"],["Mocha::Configuration","","Mocha/Configuration.html","","<p>Configuration settings\n"],["Mocha::Expectation","","Mocha/Expectation.html","","<p>Methods on expectations returned from Mock#expects, Mock#stubs,\nObject#expects and Object#stubs.\n"],["Mocha::Mock","","Mocha/Mock.html","","<p>Traditional mock object.\n<p>Methods return an Expectation which can be further modified by methods on\nExpectation …\n"],["Mocha::ObjectMethods","","Mocha/ObjectMethods.html","","<p>Methods added to all objects to allow mocking and stubbing on real objects.\n<p>Methods return a Mocha::Expectation …\n"],["Mocha::ParameterMatchers","","Mocha/ParameterMatchers.html","","<p>Used as parameters for Expectation#with to restrict the parameter values\nwhich will match the expectation. …\n"],["Mocha::ParameterMatchers::Base","","Mocha/ParameterMatchers/Base.html","",""],["Mocha::StateMachine","","Mocha/StateMachine.html","","<p>A state machine that is used to constrain the order of invocations. An\ninvocation can be constrained …\n"],["Mocha::StubbingError","","Mocha/StubbingError.html","","<p>Exception raised when an action prevented by Configuration#prevent is\nattempted.\n"],["Object","","Object.html","",""],["&","Mocha::ParameterMatchers::Base","Mocha/ParameterMatchers/Base.html#method-i-26","(matcher)","<p>A short hand way of specifying multiple matchers that should all match.\n<p>Returns a new <code>AllOf</code> parameter …\n"],["Not","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-Not","(matcher)","<p>Matches if <code>parameter_matcher</code> does not match.\n\n<pre>object = mock()\nobject.expects(:method_1).with(Not(includes(1))) ...</pre>\n"],["all_of","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-all_of","(*matchers)","<p>Matches if all <code>parameter_matchers</code> match.\n\n<pre>object = mock()\nobject.expects(:method_1).with(all_of(includes(1), ...</pre>\n"],["allow","Mocha::Configuration","Mocha/Configuration.html#method-c-allow","(action, &block)","<p>Allow the specified <code>action</code> (as a symbol). The\n<code>actions</code> currently available are\n<code>:stubbing_method_unnecessarily</code> …\n"],["any_instance","Mocha::ClassMethods","Mocha/ClassMethods.html#method-i-any_instance","()","<p>Returns a mock object which will detect calls to any instance of this\nclass.\n\n<pre>Product.any_instance.stubs(:save).returns(false) ...</pre>\n"],["any_of","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-any_of","(*matchers)","<p>Matches if any <code>parameter_matchers</code> match.\n\n<pre>object = mock()\nobject.expects(:method_1).with(any_of(1, 3)) ...</pre>\n"],["any_parameters","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-any_parameters","()","<p>Matches any parameters.\n\n<pre>object = mock()\nobject.expects(:method_1).with(any_parameters)\nobject.method_1(1, ...</pre>\n"],["anything","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-anything","()","<p>Matches any object.\n\n<pre>object = mock()\nobject.expects(:method_1).with(anything)\nobject.method_1('foo')\n# ...</pre>\n"],["at_least","Mocha::Expectation","Mocha/Expectation.html#method-i-at_least","(minimum_number_of_times)","<p>Modifies expectation so that the expected method must be called at least a\n<code>minimum_number_of_times</code>.\n\n<pre>object ...</pre>\n"],["at_least_once","Mocha::Expectation","Mocha/Expectation.html#method-i-at_least_once","()","<p>Modifies expectation so that the expected method must be called at least\nonce.\n\n<pre>object = mock()\nobject.expects(:expected_method).at_least_once ...</pre>\n"],["at_most","Mocha::Expectation","Mocha/Expectation.html#method-i-at_most","(maximum_number_of_times)","<p>Modifies expectation so that the expected method must be called at most a\n<code>maximum_number_of_times</code>.\n\n<pre>object ...</pre>\n"],["at_most_once","Mocha::Expectation","Mocha/Expectation.html#method-i-at_most_once","()","<p>Modifies expectation so that the expected method must be called at most\nonce.\n\n<pre>object = mock()\nobject.expects(:expected_method).at_most_once ...</pre>\n"],["become","Mocha::StateMachine","Mocha/StateMachine.html#method-i-become","(next_state)","<p>Put the <code>state_machine</code> into the <code>next_state</code>.\n"],["equals","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-equals","(value)","<p>Matches <code>Object</code> equalling <code>value</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(equals(2))\nobject.method_1(2) ...</pre>\n"],["expects","Mocha::Mock","Mocha/Mock.html#method-i-expects","(method_name_or_hash, backtrace = nil)","<p>Adds an expectation that a method identified by <code>method_name</code>\nSymbol/String must be called exactly once …\n"],["expects","Mocha::ObjectMethods","Mocha/ObjectMethods.html#method-i-expects","(method_name_or_hash)","<p>Adds an expectation that a method identified by <code>method_name</code>\nSymbol must be called exactly once with any …\n"],["has_entries","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-has_entries","(entries)","<p>Matches <code>Hash</code> containing all <code>entries</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(has_entries('key_1' ...</pre>\n"],["has_entry","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-has_entry","(*options)","<p>Matches <code>Hash</code> containing entry with <code>key</code> and\n<code>value</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(has_entry('key_1', ...</pre>\n"],["has_equivalent_query_string","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-has_equivalent_query_string","(uri)","<p>Matches a URI without regard to the ordering of parameters in the query\nstring\n\n<pre>object = mock()\nobject.expects(:method_1).with(has_equivalent_query_string('http://example.com/foo?a=1&amp;b=2)) ...</pre>\n"],["has_key","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-has_key","(key)","<p>Matches <code>Hash</code> containing <code>key</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(has_key('key_1'))\nobject.method_1('key_1' ...</pre>\n"],["has_value","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-has_value","(value)","<p>Matches <code>Hash</code> containing <code>value</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(has_value(1))\nobject.method_1('key_1' ...</pre>\n"],["in_sequence","Mocha::Expectation","Mocha/Expectation.html#method-i-in_sequence","(*sequences)","<p>Constrains this expectation so that it must be invoked at the current point\nin the sequence.\n<p>To expect …\n"],["includes","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-includes","(item)","<p>Matches any object that responds true to include?(item)\n\n<pre>object = mock()\nobject.expects(:method_1).with(includes('foo')) ...</pre>\n"],["instance_of","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-instance_of","(klass)","<p>Matches any object that is an instance of <code>klass</code>\n\n<pre>object = mock()\nobject.expects(:method_1).with(instance_of(String)) ...</pre>\n"],["is","Mocha::StateMachine","Mocha/StateMachine.html#method-i-is","(state)","<p>Determines whether the <code>state_machine</code> is in the specified\n<code>state</code>.\n"],["is_a","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-is_a","(klass)","<p>Matches any object that is a <code>klass</code>\n\n<pre>object = mock()\nobject.expects(:method_1).with(is_a(Integer))\nobject.method_1(99) ...</pre>\n"],["is_not","Mocha::StateMachine","Mocha/StateMachine.html#method-i-is_not","(state)","<p>Determines whether the <code>state_machine</code> is not in the specified\n<code>state</code>.\n"],["kind_of","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-kind_of","(klass)","<p>Matches any object that is a kind of <code>klass</code>\n\n<pre>object = mock()\nobject.expects(:method_1).with(kind_of(Integer)) ...</pre>\n"],["mock","Mocha::API","Mocha/API.html#method-i-mock","(*arguments, &block)","<p>Creates a mock object.\n<p><code>name</code> is a <code>String</code> identifier for the mock object.\n<p><code>expected_methods</code> is a <code>Hash</code> with …\n"],["multiple_yields","Mocha::Expectation","Mocha/Expectation.html#method-i-multiple_yields","(*parameter_groups)","<p>Modifies expectation so that when the expected method is called, it yields\nmultiple times per invocation …\n"],["never","Mocha::Expectation","Mocha/Expectation.html#method-i-never","()","<p>Modifies expectation so that the expected method must never be called.\n\n<pre>object = mock()\nobject.expects(:expected_method).never ...</pre>\n"],["once","Mocha::Expectation","Mocha/Expectation.html#method-i-once","()","<p>Modifies expectation so that the expected method must be called exactly\nonce. Note that this is the default …\n"],["optionally","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-optionally","(*matchers)","<p>Matches optional parameters if available.\n\n<pre>object = mock()\nobject.expects(:method_1).with(1, 2, optionally(3, ...</pre>\n"],["prevent","Mocha::Configuration","Mocha/Configuration.html#method-c-prevent","(action, &block)","<p>Raise a StubbingError if the specified <code>action</code> (as a symbol) is\nattempted. The <code>actions</code> currently available …\n"],["raises","Mocha::Expectation","Mocha/Expectation.html#method-i-raises","(exception = RuntimeError, message = nil)","<p>Modifies expectation so that when the expected method is called, it raises\nthe specified <code>exception</code> with …\n"],["regexp_matches","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-regexp_matches","(regexp)","<p>Matches any object that matches <code>regular_expression</code>.\n\n<pre>object = mock()\nobject.expects(:method_1).with(regexp_matches(/e/)) ...</pre>\n"],["responds_like","Mocha::Mock","Mocha/Mock.html#method-i-responds_like","(object)","<p>Constrains the <code>mock</code> so that it can only expect or stub methods\nto which <code>responder</code> responds. The constraint …\n"],["responds_with","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-responds_with","(message, result)","<p>Matches any object that responds to <code>message</code> with\n<code>result</code>. To put it another way, it tests the quack, not …\n"],["returns","Mocha::Expectation","Mocha/Expectation.html#method-i-returns","(*values)","<p>Modifies expectation so that when the expected method is called, it returns\nthe specified <code>value</code>.\n\n<pre>object ...</pre>\n"],["sequence","Mocha::API","Mocha/API.html#method-i-sequence","(name)","<p>Returns a new sequence that is used to constrain the order in which\nexpectations can occur.\n<p>Specify that …\n"],["starts_as","Mocha::StateMachine","Mocha/StateMachine.html#method-i-starts_as","(initial_state)","<p>Put the <code>state_machine</code> into the <code>initial_state</code>.\n"],["states","Mocha::API","Mocha/API.html#method-i-states","(name)","<p>Returns a new <code>state_machine</code> that is used to constrain the\norder in which expectations can occur.\n<p>Specify …\n"],["stub","Mocha::API","Mocha/API.html#method-i-stub","(*arguments, &block)","<p>Creates a mock object.\n<p><code>name</code> is a <code>String</code> identifier for the mock object.\n<p><code>stubbed_methods</code> is a <code>Hash</code> with …\n"],["stub_everything","Mocha::API","Mocha/API.html#method-i-stub_everything","(*arguments, &block)","<p>Creates a mock object that accepts calls to any method.\n<p>By default it will return <code>nil</code> for any method call. …\n"],["stubs","Mocha::Mock","Mocha/Mock.html#method-i-stubs","(method_name_or_hash, backtrace = nil)","<p>Adds an expectation that a method identified by <code>method_name</code>\nSymbol/String may be called any number of …\n"],["stubs","Mocha::ObjectMethods","Mocha/ObjectMethods.html#method-i-stubs","(method_name_or_hash)","<p>Adds an expectation that a method identified by <code>method_name</code>\nSymbol may be called any number of times …\n"],["then","Mocha::Expectation","Mocha/Expectation.html#method-i-then","(*parameters)","<p><code>then()</code> is used as syntactic sugar to improve readability. It\nhas no effect on state of the expectation. …\n"],["throws","Mocha::Expectation","Mocha/Expectation.html#method-i-throws","(tag, object = nil)","<p>Modifies expectation so that when the expected method is called, it throws\nthe specified <code>tag</code> with the …\n"],["times","Mocha::Expectation","Mocha/Expectation.html#method-i-times","(range)","<p>Modifies expectation so that the number of calls to the expected method\nmust be within a specific <code>range</code> …\n"],["twice","Mocha::Expectation","Mocha/Expectation.html#method-i-twice","()","<p>Modifies expectation so that the expected method must be called exactly\ntwice.\n\n<pre>object = mock()\nobject.expects(:expected_method).twice ...</pre>\n"],["unstub","Mocha::Mock","Mocha/Mock.html#method-i-unstub","(method_name)","<p>Removes all expectations for method identified by <code>method_name</code>.\n\n<pre>object = mock('mock')\nobject.stubs(:method1).returns(:result1) ...</pre>\n"],["unstub","Mocha::ObjectMethods","Mocha/ObjectMethods.html#method-i-unstub","(*method_names)","<p>Removes the method stub added by calls to #expects or #stubs. Restores the\noriginal behaviour of the …\n"],["warn_when","Mocha::Configuration","Mocha/Configuration.html#method-c-warn_when","(action, &block)","<p>Warn if the specified <code>action</code> (as a symbol) is attempted. The\n<code>actions</code> currently available are\n<code>:stubbing_method_unnecessarily</code> …\n"],["when","Mocha::Expectation","Mocha/Expectation.html#method-i-when","(state_predicate)","<p>Constrains the expectation to occur only when the\n<code>state_machine</code> is in the named <code>state</code>.\n<p>See also API#states …\n"],["with","Mocha::Expectation","Mocha/Expectation.html#method-i-with","(*expected_parameters, &matching_block)","<p>Modifies expectation so that the expected method must be called with\n<code>expected_parameters</code>.\n\n<pre>object = mock() ...</pre>\n"],["yaml_equivalent","Mocha::ParameterMatchers","Mocha/ParameterMatchers.html#method-i-yaml_equivalent","(object)","<p>Matches any YAML that represents the specified <code>object</code>\n\n<pre>object = mock()\nobject.expects(:method_1).with(yaml_equivalent(1, ...</pre>\n"],["yields","Mocha::Expectation","Mocha/Expectation.html#method-i-yields","(*parameters)","<p>Modifies expectation so that when the expected method is called, it yields\nwith the specified <code>parameters</code> …\n"],["|","Mocha::ParameterMatchers::Base","Mocha/ParameterMatchers/Base.html#method-i-7C","(matcher)","<p>A short hand way of specifying multiple matchers, only at least one of\nwhich should pass.\n<p>Returns a new …\n"],["COPYING","","COPYING_rdoc.html","","<p>Copyright Revieworld Ltd. 2006\n<p>You may use, copy and redistribute this library under the same terms as …\n"],["MIT-LICENSE","","MIT-LICENSE_rdoc.html","","<p>Copyright © 2006 Revieworld Ltd.\n<p>Permission is hereby granted, free of charge, to any person obtaining …\n"],["README","","README_rdoc.html","","<p>Mocha <img src=\"https://secure.travis-ci.org/floehopper/mocha.png\" />\n<p>Mocha is a library for mocking and …\n"],["RELEASE","","RELEASE_rdoc.html","","<p>0.10.5 (a5a64cf9755b21d4a30e446232654d1c0fc6f151)\n<p>Fix for issue #66 (hopefully without regressing on issue …\n"],["agiledox","","agiledox_txt.html","","<p>api should:\n\n<pre>- fail mocha test due to unexpected invocation\n- fail mocha test due to unfulfilled exception ...</pre>\n"]]}}