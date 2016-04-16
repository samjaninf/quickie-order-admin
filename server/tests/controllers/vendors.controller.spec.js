var Vendor = require('../../models/vendor.model.js'),
    mongoose = require('mongoose');

var vendors = [];

describe('vendors controller', function() {
    before(function() {
        mongoose.connect('mongodb://localhost/quickie-order-test');
    });

    after(function() {
        mongoose.disconnect();
    });

    describe('Are the vendors wired up?', function() {
        it('should not error at GET: /api/vendors', function(done) {
            request(app)
                .get('/api/vendors')
                .expect(200)
                .end(done);
        })
    });

    describe('GET /api/vendors', function() {
        seedVendors();

        it('should get all the vendors', function(done) {
            request(app)
                .get('/api/vendors')
                .expect(200)
                .end(function(err, response) {
                    expect(response.body.data.length).to.equal(3);
                    done();
                });
        });
    });

    describe('POST /api/vendors', function() {
        it('should create a new vendor', function(done) {
            var vendor = {
                name: "Sky Thai Sushi",
                description: 'Japanese sushi restaurant downtown. Blah blah.',
                media: {
                    logo: "https://dtyxqspugqu5z.cloudfront.net/logo/6131/286131/20131113logo.jpg"
                },
                phone: "9549939889",
                address: {
                    country: "USA",
                    locality: "Fort Lauderdale",
                    postalCode: "33301",
                    region: "FL",
                    streetAddress: "350 E Las Olas Blvd",
                    coordinates: [-80.139959, 26.119175]
                },
                categories: ["Asian", "Japanese", "Lunch Specials", "Sushi", "Thai"]
            };

            request(app)
                .post('/api/vendors')
                .send(vendor)
                .expect(200)
                .end(function(err, response) {
                    if (err) return done(err);
                    expect(response.body.data.name).to.equal(vendor.name);
                    expect(response.body.data.phone).to.equal(vendor.phone);
                    done();
                })
        })
    });

    describe('GET /api/vendors/:vendorId', function() {
        seedVendors();

        it('should fetch a single vendor', function(done) {
            request(app)
                .get('/api/vendors')
                .expect(200)
                .end(function(err, response) {
                    if (err) return done(err);
                    expect(response.body.data.length).to.equal(3);
                    var vendor = response.body.data[0];
                    request(app)
                        .get('/api/vendors/' + vendor._id)
                        .expect(200)
                        .end(function(err, response) {
                            if (err) return done(err);
                            expect(response.body.data._id).to.equal(vendor._id);
                            done();
                        })
                });
        });
    });

    describe('Put /api/vendors/:venderIf', function() {
        seedVendors();

        it('should update a vendor', function(done) {

            var vendor = {
                name: "Sky Thai Sushi",
                description: 'Japanese sushi restaurant downtown. Blah blah.',
                media: {
                    logo: "https://dtyxqspugqu5z.cloudfront.net/logo/6131/286131/20131113logo.jpg"
                },
                phone: "9549939889",
                address: {
                    country: "USA",
                    locality: "Fort Lauderdale",
                    postalCode: "33301",
                    region: "FL",
                    streetAddress: "350 E Las Olas Blvd",
                    coordinates: [-80.139959, 26.119175]
                },
                categories: ["Asian", "Japanese", "Lunch Specials", "Sushi", "Thai"]
            };


            request(app)
                .get('/api/vendors')
                .expect(200)
                .end(function(err, response) {
                    if (err) return done(err);
                    expect(response.body.data.length).to.equal(3);
                    var oldVendor = response.body.data[0];
                    request(app)
                        .put('/api/vendors/' + oldVendor._id)
                        .send(vendor)
                        .expect(200)
                        .end(function(err, response) {
                            if (err) return done(err);
                            request(app)
                                .get('/api/vendors/' + oldVendor._id)
                                .expect(200)
                                .end(function(err, response) {
                                    if (err) return done(err);
                                    expect(response.body.data.name).to.equal(vendor.name);
                                    done();
                                });
                        });
                });
        });
    });

    describe('DELETE /api/vendors/:vendorId', function() {
        seedVendors();

        it('should delete a single vendor', function(done) {
            console.log(vendors);

            request(app)
                .del('/api/vendors/' + vendors[0]._id)
                .expect(200)
                .end(function(err, response) {
                    if (err) return done(err);
                    request(app)
                        .get('/api/vendors')
                        .expect(200)
                        .end(function(err, response) {
                            if (err) return done(err);
                            expect(response.body.data.length).to.equal(2);
                            done();
                        });
                });
        });
    });
});

function seedVendors() {
    before(function(done) {
        Vendor.remove({}, function() {
            var data = [
                {
                    name: 'Sushi Song',
                    description: 'Japanese sushi restaurant downtown. Blah blah.',
                    media: {
                        logo: "https://dtyxqspugqu5z.cloudfront.net/logo/528/320528/null"
                    },
                    phone: "9547647664",
                    address: {
                        country: "USA",
                        locality: "Fort Lauderdale",
                        postalCode: "33301",
                        region: "FL",
                        streetAddress: "209 SW 2nd Ave",
                        coordinates: [-80.1414016, 26.1204714]
                    },
                    categories: ['Japanese', 'Sushi']
                },
                {
                    name: "SuViche",
                    description: 'Celiac pickled sriracha direct trade, offal XOXO swag mustache occupy wayfarers green juice',
                    media: {
                        logo: "https://dtyxqspugqu5z.cloudfront.net/logo/3317/313317/201508102015081020140212logo.jpg"
                    },
                    phone: "9546563663",
                    address: {
                        country: "USA",
                        locality: "Fort Lauderdale",
                        postalCode: "33301",
                        region: "FL",
                        streetAddress: "401 E. Las Olas Ste. 150",
                        coordinates: [-80.139359, 26.119171]
                    },
                    categories: ["Asian", "Eclectic", "Japanese", "Latin American", "Peruvian", "Sushi"]
                },
                {
                    name: "Gran Forno Pronto",
                    description: 'Really good bread on Las Olas. Blah blah.',
                    media: {
                        logo: "https://dtyxqspugqu5z.cloudfront.net/logo/1308/321308/null"
                    },
                    phone: "9545336276",
                    address: {
                        country: "USA",
                        locality: "Fort Lauderdale",
                        postalCode: "33301",
                        region: "FL",
                        streetAddress: "704 E Las Olas",
                        coordinates: [-80.1362402, 26.119021]
                    },
                    categories: ["Pizza", "Sandwiches"]
                }
            ];

            Vendor.create(data, function(err, results) {
                expect(typeof err).to.not.equal('undefined');
                vendors = results;
                done();
            });
        });
    });

    after(function(done) {
        Vendor.remove({}, function() { done() });
    });
}