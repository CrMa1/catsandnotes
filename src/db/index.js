import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessions (id_user INT NOT NULL, image_profile TEXT NOT NULL, email TEXT NOT NULL, username TEXT NOT NULL)',
        [],
        () => resolve(),
        (_, error) => {
          reject(error)
        }
      )
    })
  })
  return promise
}

export const insertSession = ({ id_user, image_profile, email, username }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO sessions (id_user, image_profile, email, username) VALUES (?, ?, ?, ?);',
        [id_user, image_profile, email, username],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM sessions',
        [],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => reject('Error ', error)
      )
    })
  })
  return promise
}

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}


export const updateSession = ({image_profile, email, username}) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE sessions SET image_profile = ?, email = ?, username = ?',
        [image_profile, email, username],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}