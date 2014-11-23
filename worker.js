module.exports = {
	init: function (config, job, context, cb) {
		return cb(null, {
			env: {},
			test: {
				command: 'foodcritic',
				args: ["-t " + config.tags, "-f " + config.epic_fail_tags, "."]
			}
		});
	},

	autodetect: {
		filename: 'package.json',
		exists: true
	}
};
