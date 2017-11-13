module.exports = {
    assess: function(submission) {
        //create new PassFailResult
        var result = getFactory().newConcept('org.moocon.core', 'PassFailResult');
        //check if marking criteria applies
        if( submission.comment == "Hello World!" ) {
          result.passed = true;  
        } else {
            result.passed = false;
        }

        return result;
    }
 }