# strider-foodcritic

![FoodCritic](https://raw.githubusercontent.com/logankoester/strider-foodcritic/master/static/banner.png)

> [Foodcritic](http://www.foodcritic.io/) is a helpful lint tool you can use to check your [Chef](http://getchef.com/) cookbooks for common problems.

[![Strider Build Status](http://ci.ldk.io/logankoester/strider-foodcritic/badge)](https://ci.ldk.io/logankoester/strider-foodcritic/)
[![Dependency Status](https://david-dm.org/logankoester/strider-foodcritic.png)](https://david-dm.org/logankoester/strider-foodcritic)
[![devDependency Status](https://david-dm.org/logankoester/strider-foodcritic/dev-status.png)](https://david-dm.org/logankoester/strider-foodcritic#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

Install this [Strider](http://stridercd.com/) plugin to lint your cookbooks during the build.

## Installation

Your Strider worker should already have `foodcritic` installed. `strider-foodcritic` will not attempt to install it for you.

    $ gem install foodcritic
    $ strider install foodcritic

Then simply add the Foodcritic plugin to any Chef project you are having Strider build.

## Testing & Contributing

The test suite is implemented with [mocha](http://mochajs.org/).

To rebuild & run the tests

    $ git clone https://github.com/logankoester/strider-foodcritic.git
    $ cd strider-foodcritic
    $ npm install
    $ npm test

To contribute back, fork the repo and open a pull request with your changes.

## License

Copyright (c) 2014 Logan Koester
Licensed under the MIT license.
