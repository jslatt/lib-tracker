rentals.update('zS4t8xYyHa555wH4H', {
  $set: { return: false }
})




Template.reports_weekly.helpers({
  books_out: function () {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 30*24*60*60 * 1000) }, length: 30 });
  },
  books_dayZero: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 7*24*60*60 * 1000), '$lt':new Date(Date.now() - 6*24*60*60 * 1000) }, length: 30}).count();
  },
  books_dayOne: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 6*24*60*60 * 1000), '$lt':new Date(Date.now() - 5*24*60*60 * 1000) }, length: 30}).count();
  },
  books_dayTwo: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 5*24*60*60 * 1000), '$lt':new Date(Date.now() - 4*24*60*60 * 1000) }, length: 30}).count();
  },
  books_dayThree: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 4*24*60*60 * 1000), '$lt':new Date(Date.now() - 3*24*60*60 * 1000) }, length: 30}).count();
  },
  books_dayFour: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 3*24*60*60 * 1000), '$lt':new Date(Date.now() - 2*24*60*60 * 1000) }, length: 30}).count();
  },
  books_dayFive: function() {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 2*24*60*60 * 1000), '$lt':new Date(Date.now() - 1*24*60*60 * 1000) }, length: 30}).count();
  },
  books_daySix: function() {
    return rentals.find({ returned: false, SortDate: new Date(Date.now() - 24*60*60 * 1000), length: 30});
  },
  name: function () {
      let user = this.renter;
      let first = clients.findOne({ _id: user }).firstName;
      let last = clients.findOne({ _id: user }).lastName;
      let full = first + " " + last;

      return full;

  }
})
