const count = () => {
  const letters = document.getElementById("letters").value;
  const result = [...letters].reduce((count, char) => {
    let countNew = count;
    if (!countNew.length) {
      countNew = [[char, 0]];
    }
    const [charLast, countLast] = countNew[countNew.length - 1];
    if (charLast === char) {
      countNew[countNew.length - 1] = [char, countLast + 1];
    } else {
      countNew.push([char, 1]);
    }
    return countNew;
  }, []);

  console.log(`Result: ${JSON.stringify(result)}`);
  document.getElementById("demo").innerHTML = `Result: ${JSON.stringify(
    result
  )}`;
};
