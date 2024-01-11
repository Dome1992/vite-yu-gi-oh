import { reactive } from 'vue'

export const store = reactive({
    // Array e Url api realtivo alla lista delle Card
    characterList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",

    // Array e Url api realtivo al filtro delle Archetipi
    archetypes: [],
    archetypeURL: "https://db.ygoprodeck.com/api/v7/archetype.php",
    searcharchetype: "",
   // searchText: "",
    //loading: true,
});