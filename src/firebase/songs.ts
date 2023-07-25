import type { Song } from '../types';
import { Ref } from 'vue';
import { collection, addDoc, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const DB_NAME = 'songs';

export const getSongs = (songs: Ref<Song[]>, isLoading: Ref<boolean>) => {
  isLoading.value = true;
  const q = query(collection(db, DB_NAME));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = [];
    querySnapshot.forEach((doc) => {
      tempSongs.push({id: doc.id, ...doc.data()} as Song)
    })
    songs.value = tempSongs;
    isLoading.value = false;
  });
}

export const addSong = async (song: Song) => {
  await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year
  });
}

export const deleteSong = async(songId: Song) => {
  await deleteDoc(doc(db, DB_NAME, songId));
}