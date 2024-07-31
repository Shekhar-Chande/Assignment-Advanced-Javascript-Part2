// Create a simple polyfill for the Array.includes method by the name of customIncludes.

if (!Array.prototype.myIncludes) {
    Array.prototype.myIncludes = function (searchElement) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
          return true;
        }
      }
      return false;
    };
  }
  

  const array = [1, 2, 3, 4, 5];
  
 console.log(array.myIncludes(3)); 
  console.log(array.myIncludes(6));