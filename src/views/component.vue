<>
import api from '@/services/airtable'

export default {
  ...
  async created() {
    let r = await api.find({ resource: 'Saison', query: 'maxRecords=3' })
    console.log(r)
  },

