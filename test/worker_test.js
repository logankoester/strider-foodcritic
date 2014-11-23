var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));

var Worker = require('../worker.js');
var WebApp = require('../webapp.js');

describe("foodcritic worker", function() {
	var work = null;
	var io = null;
	var context = null;
	var config = null;
	var job = null;
	var exitCode = null;

	var prepareWorker = function(done) {
		context = {};
		io = {
			on: sinon.stub().yields('123', { exitCode: exitCode }),
			removeListener: sinon.stub(),
			emit: sinon.stub()
		};
		Worker.init(config, job, sinon.stub(), function(err, res) {
			work = function(){
				return res;
			};
			if (done) done();
		})
	};

	beforeEach(function(done) {
		exitCode = 0;
		job = {
			project: { name: "strider-foodcritic" },
			ref: { branch: "master" },
			_id: "123",
			trigger: {
				type: "manual"
			}
		};
		process.env.strider_server_name = "http://example.com";
		config = {
			tags: "footag ~badtag",
			epic_fail_tags: "bartag ~badtag"
		};

		prepareWorker(done);
	});

	it("should execute foodcritic with the expected arguments", function() {
		var setup = work();
		expect(typeof setup.test).to.equal('object');
		expect(setup.test.command).to.equal('foodcritic');
		expect(setup.test.args[0]).to.equal('-t');
		expect(setup.test.args[1]).to.equal('footag ~badtag');
		expect(setup.test.args[2]).to.equal('-f');
		expect(setup.test.args[3]).to.equal('bartag ~badtag');
		expect(setup.test.args[4]).to.equal('.');
	});

});
