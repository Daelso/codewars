const cannonsReady = (gunners) => Object.entries(gunners).some((gunman) => gunman[1] === 'nay') ? 'Shiver me timbers!' : 'Fire!';