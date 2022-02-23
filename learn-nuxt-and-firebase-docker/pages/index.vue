<template>
  <Tutorial />
</template>

<script>
import { getDatabase, ref, set, child, get } from "firebase/database";
export default {
  data() {
    return {
      count: null,
    };
  },
  async mounted() {
    await this.getData();
    await this.saveData();
  },
  methods: {
    async getData() {
      const userID = "a";
      const dbRef = ref(getDatabase());
      await get(child(dbRef, `users/${userID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.count = snapshot.val().count;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveData() {
      const count = this.count + 1;
      const userID = "a";
      const db = getDatabase();
      set(ref(db, "users/" + userID), {
        username: "name",
        count: count,
        email: "email",
      });
    },
  },
};
</script>
