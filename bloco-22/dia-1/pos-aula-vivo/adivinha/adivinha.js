const randomNumber = () =>{ 
  const sort = parseInt(Math.random() * 10, 10);
  return sort;
}

module.exports = randomNumber;