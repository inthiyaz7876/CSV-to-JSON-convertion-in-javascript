module.exports = (function(){
  return {
    compareJSONStrings: function(ExpectedJSONStr, actualJSONStr) {
      if (!ExpectedJSON || !actualJSON) {
        return;
      }
      return compareObjects(JSON.parse(ExpectedJSONStr), JSON.parse(actualJSONStr));
    },
    compareJSONObjects:   function(ExpectedJSON, actualJSON) {
      if (!ExpectedJSON || !actualJSON) {
        return;
      }
      var ExpectedDataSet = new Set(toDataMap(ExpectedJSON));
      var actualJSONObjs = actualJSON;
      var diffs = [];
      var matched = [];
      actualJSONObjs.forEach(function(obj) {
        var actual = toObjValueHash(obj);
        if (ExpectedDataSet.has(actual)) {
          matched.push(obj);
        } else {
          diffs.push(obj);
        }
      });
      if (diffs.length > 0) {
        // console.log("Differs by ", diffs.length);
        // console.log("Differences: ", diffs);
        return {
          diffs: diffs.length,
          diffObjs : diffs
        }
      } else {
        // console.log("Data is Same");
        return {
          diffs: diffs.length,
          diffObjs : []
        }
      }
      function toDataMap(data) {  
        
        return data.map(toObjValueHash);
      }
      function toObjValueHash(obj) {
        // return Object.values(obj).sort().join(';');
        return objValues(obj).sort().join(';')
      }
      function objValues(obj) {
        var keys = Object.keys(obj);
        var values = [];
        keys.forEach(function(keyName) {
          var val = obj[keyName];
          values.push(val);
        });
        return values;
      }
    }
  }
})();
