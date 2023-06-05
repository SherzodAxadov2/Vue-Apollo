<template>
  <div>
    <h2>Books</h2>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">{{ loading }}</p>
    <ul v-if="books?.length > 0">
      <li v-for="book of books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed, watchEffect } from 'vue'

const ALL_QUERY_BOOKS = gql`
  query{
    allBooks{
      id
      title
      pages
      rating{
        star
      }
      author{
        firstName
        lastName
      }
    }
  }
`

const { result, error, loading } = useQuery(ALL_QUERY_BOOKS)
const books = computed(() => result.value?.allBooks ?? [])

watchEffect(() => {
  console.log('books', books);
})
</script>
