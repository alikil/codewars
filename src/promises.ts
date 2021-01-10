// hard task (like connect to db or fetch)
const hardAsyncTask = async () => {
const time = Math.random() < 0.5 ? 200 : 600;
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function sleep2(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  setTimeout(() => "ok1", time);
  sleep(time);
  sleep2(1000).then(() => {
    sleep2(1000).then(() => "ok2");
  });
  return Math.random() * (9999 - 111) + 111;
};

// data intrface
export interface IData {
  name: string;
  value: number; // number from 3 to 4 random
  res?: any;
}

// Prepair data value random from 2 to 4
const min = 3;
const max = 3;
const data: IData[] = [
  {
    name: "first",
    value: Math.floor(Math.random() * (max - min) + min),
  },
  {
    name: "second",
    value: Math.floor(Math.random() * (max - min) + min),
  },
  {
    name: "tree",
    value: Math.floor(Math.random() * (max - min) + min),
  },
  {
    name: "four",
    value: Math.floor(Math.random() * (max - min) + min),
  },
  {
    name: "five",
    value: Math.floor(Math.random() * (max - min) + min),
  },
];

// original promise
const originalPromiseF = (data: IData[]) => {
  const originalPromise = new Promise(async (resolve, reject) => {
    const res = await hardAsyncTask();
    const isAllEqual3 = data
      .map((d) => (d.value === 3 ? true : false))
      .every((e) => e === true);
    if (isAllEqual3) {
      const result = data.map((d) => {
        d.res = res;
        return d;
      });
      resolve(result);
    } else {
      const result = data.map((d) => {
        d.res = null;
        return d;
      });
      reject(result);
    }
  }).catch((err) => err);
  return originalPromise;
};

// Async function is Promise too (best practises)
const funcPromise = async (data: IData[]) => {
  const res = await hardAsyncTask();
  const isAllEqual3 = data
    .map((d) => (d.value === 3 ? true : false))
    .every((e) => e === true);
  if (isAllEqual3)
    return data.map((d) => {
      d.res = res;
      return d;
    });
  else
    return data.map((d) => {
      d.res = null;
      return d;
    });
};

// special async map (map can be async)
const customMapPromiseRun = () => {
  return data.map(async (d) => {
    const res = await hardAsyncTask();
    return { realName: d.name, realValue: d.value, res };
  });
};

const run = async (data: IData[]) => {
  const a = funcPromise(data);
  const b = originalPromiseF(data);
  console.log("without await\n", { a, b });

  const c = await funcPromise(data);
  const d = await originalPromiseF(data);
  console.log("with await\n", { c, d });

  // not resolved promise
  const pr1 = customMapPromiseRun();
  console.log("clear Promise\n", pr1);

  // resolve any promises original way
  const resolvedPromise = await Promise.all(pr1);
  console.log("resolved Promise via Promise all\n", resolvedPromise);

  // map promises
  const pr2 = customMapPromiseRun();
  console.log('forEach');
  (await Promise.all(pr2)).forEach((d, i) => console.log(i, d));

  const pr3 = customMapPromiseRun();
  console.log('then');
  await Promise.all(pr3).then((d) => console.log(d));

  const pr4 = customMapPromiseRun();
  console.log('map');
  (await Promise.all(pr4)).map((d, i) => console.log(i, d));

  const pr5 = customMapPromiseRun();
  console.log('for');
  for (const iterator of await Promise.all(pr5)) console.log(iterator)

  const pr6 = customMapPromiseRun();
  console.log('for await');
  for await (const iterator of pr6) console.log(iterator)



  return "ok";
};
run(data);
