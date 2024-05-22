// type Watcher<T> = {
//   on<K extends string & keyof T>(
//     eventName: `${K}Changed`,
//     callback: (oldValue: T[K], newValue: T[K]) => void
//   ): void;
// };

// declare function watch<T>(obj: T): Watcher<T>;

// const personWatcher = watch({
//   firstName: 'Saoirse',
//   lastName: 'Ronan',
//   age: 26,
//   sex: '男',
//   level: 2
// });

// personWatcher.on(
//   'ageChanged',
//   (oldValue, newValue) => {

//   }
// );
