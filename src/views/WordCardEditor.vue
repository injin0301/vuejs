<template>
    <button class="menuone" @click="$router.push('/menu')">
        Retour au menu
    </button>


    <h2>Créer ses propres cartes</h2>

    <div class="category">
        <label for="category">Quelle catégorie ?</label>
        <input name="category" type="text">

        <select name="category">
            <option value="">Choisir une catégorie</option>
            <option value="1">Nouvelle catégorie</option>
            <option value="{{ key }}" v-for="(value, key) in store.state">{{ key }}</option>
        </select>
    </div>

    <div class="question">
        <label for="question">Quelle est la question ?</label>
        <input name="question" type="text">
    </div>

    <div class="answer1">
        <label for="answer1">1ère réponse</label>
        <input name="answer1" type="text">
    </div>

    <div class="answer2">
        <label for="answer2">2ème réponse</label>
        <input name="answer2" type="text">
    </div>

    <div class="answer3">
        <label for="answer3">3ème réponse</label>
        <input name="answer3" type="text">
    </div>

</template>

<script setup>

    import { useCardDataStore } from '@/store/card-data';
    const store = useCardDataStore()

    // TEST
    import { useQuestionsStore } from "@/store/card-data";
    const teststore = useQuestionsStore()

    teststore.setQuestions

</script>

<style scoped>

    * {
        font-family: "Shantell Sans", cursive;
    }
    div {
        margin: 10px 10px;
        text-align: center;
    }
</style>