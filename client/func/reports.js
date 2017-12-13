


Template.reports_weekly.helpers({
  books_out: function () {
    return rentals.find({ returned: false, SortDate: { '$lt':new Date(Date.now() - 30*24*60*60 * 1000) }, length: 30 });
  },
  books_okay: function () {
    return rentals.find({ returned: false, SortDate: { '$gt':new Date(Date.now() - 30*24*60*60 * 1000) }, length: 30 });
  },
  name: function () {
      let user = this.renter;
      let first = clients.findOne({ _id: user }).firstName;
      let last = clients.findOne({ _id: user }).lastName;
      let full = first + " " + last;

      return full;

  }
})
