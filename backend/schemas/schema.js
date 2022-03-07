// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import about from './about.js'
import brands from './brands'
import contact from "./contact.js";
import experience from './experience.js'
import skills from './skills.js'
import testimonials from './testimonials.js'
import workExperience from './workExperience.js'
import works from './works.js'
// Then we give our schema to the builder and provide the result to Sanity
//Rwanda Coding Academy
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
<<<<<<< HEAD
  types: schemaTypes.concat([
    /* Your types here! */
    about,brands,contact,experience,skills,testimonials,workExperience,works
  ])
=======
<<<<<<< HEAD
  types: schemaTypes.concat([about, brands, contact, experience, skills, testimonials, workExperience, works]),
>>>>>>> e951173f6fa7776e4b899b65b0d9454c7c914813
})
=======
  types: schemaTypes.concat([
    /* Your types here! */
    about,brands,contact,experience,skills,testimonials,workExperience,works
  ])

})
>>>>>>> 6d08975e86137f78bd40cc1eddee7fa95f20367f
