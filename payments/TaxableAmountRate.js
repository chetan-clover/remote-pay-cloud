/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  */
  TaxableAmountRate = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = TaxableAmountRate;
      this.id = undefined;
      this.name = undefined;
      this.taxableAmount = undefined;
      this.rate = undefined;
      this.isVat = undefined;
    },

    /**
    * Set the field value
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * @param {String} name 
    */
    setName: function(name) {
      this.name = name;
    },

    /**
    * Get the field value
    * @return {String} 
    */
    getName: function() {
      return this.name;
    },

    /**
    * Set the field value
    * @param {Number} taxableAmount must be a long integer
    */
    setTaxableAmount: function(taxableAmount) {
      this.taxableAmount = taxableAmount;
    },

    /**
    * Get the field value
    * @return {Number} must be a long integer
    */
    getTaxableAmount: function() {
      return this.taxableAmount;
    },

    /**
    * Set the field value
    * @param {Number} rate must be a long integer
    */
    setRate: function(rate) {
      this.rate = rate;
    },

    /**
    * Get the field value
    * @return {Number} must be a long integer
    */
    getRate: function() {
      return this.rate;
    },

    /**
    * Set the field value
    * @param {Boolean} isVat 
    */
    setIsVat: function(isVat) {
      this.isVat = isVat;
    },

    /**
    * Get the field value
    * @return {Boolean} 
    */
    getIsVat: function() {
      return this.isVat;
    },
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

TaxableAmountRate._meta_ =  {fields:  {}};
TaxableAmountRate._meta_.fields["id"] = {};
TaxableAmountRate._meta_.fields["id"].type = String;
TaxableAmountRate._meta_.fields["name"] = {};
TaxableAmountRate._meta_.fields["name"].type = String;
TaxableAmountRate._meta_.fields["taxableAmount"] = {};
TaxableAmountRate._meta_.fields["taxableAmount"].type = Number;
TaxableAmountRate._meta_.fields["rate"] = {};
TaxableAmountRate._meta_.fields["rate"].type = Number;
TaxableAmountRate._meta_.fields["isVat"] = {};
TaxableAmountRate._meta_.fields["isVat"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TaxableAmountRate;
}
