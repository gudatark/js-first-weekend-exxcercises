function abbreviateName(name) {
    return (
      name
        // split the name into two words
        .split(" ")
  
        // take first char of both parts and capitalize them
        .map((part) => part[0].toUpperCase())
  
        // join both characters with a dot
        .join(".")
    );
  }

  console.log(abbreviateName("Sam Harris")); // ==> S.H
  console.log(abbreviateName("Patrick Feeney")); // ==> P.F6.6