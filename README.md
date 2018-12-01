# Dynamic Layout - nuxt generate (Pre-render) issue

Run `npm run generate`

Issue: On mobile devices when refresh page/fist load, desktop layout is loading instead of mobile.

This poject is created from scratch by following below link:
https://nuxtjs.org/guide/installation

Note: The deployment is nuxt generate (pre-render)

Observation: 
- Desktop layout is loading on mobile view on page refresh
- Desktop component is loading first then mobile component on page refresh

Expected behaviour:

- On mobile devices mobile layout and component should load on page refresh & router changes
