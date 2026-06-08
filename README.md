# Taste Engine API

An experimental AI-driven recommendation engine focused on preference discovery, recommendation intelligence, and explainable decision making.

Taste Engine explores how AI can be used to model human preferences while keeping recommendation logic transparent, inspectable, and understandable.

The current implementation serves as a foundation for future AI-powered recommendation systems.

---

## Vision

Modern recommendation systems power platforms such as Netflix, Spotify, TikTok, YouTube and Amazon.

These systems often rely on machine learning models that:

* Generate item features
* Model user preferences
* Calculate similarity between users and items
* Optimize rankings
* Personalize recommendations
* Learn from behavioral patterns

Taste Engine aims to explore these concepts in an experimental environment while maintaining visibility into how recommendations are generated.

The long-term goal is not simply to recommend items, but to understand *why* recommendations are being made.

---

## Current Architecture

The current version uses a transparent recommendation pipeline:

```txt
Items
↓
Weighted Traits
↓
Profile Calculation
↓
Ranked Profile
↓
Recommendations
```

Each item contains weighted traits that contribute to a user profile.

Example:

```json
{
  "title": "Journaling",
  "traits": [
    {
      "key": "creative",
      "weight": 0.8
    },
    {
      "key": "soothing",
      "weight": 0.6
    }
  ]
}
```

Selected items contribute to a profile which is then used to generate recommendations.

This provides a fully explainable baseline before introducing machine learning models.

---

## Example Flow

```txt
Create Session
↓
Select Items
↓
Generate Profile
↓
Rank Traits
↓
Generate Recommendations
```

Example:

```txt
Selected:
- Journaling
- Camping

Profile:
- soothing
- creative
- adventurous
- thinker

Recommendations:
- Fishing
- Books
- Anime
- Planner
```

---

## Current Features

### Recommendation Engine

* Weighted trait scoring
* Profile generation
* Ranked trait output
* Content-based recommendations
* Session-based recommendation flow

### Sessions

* Redis-backed sessions
* Automatic expiration (TTL)
* Session recommendations
* Profile retrieval

### API

* REST API
* OpenAPI specification
* Swagger UI documentation

---

## Tech Stack

* Node.js
* TypeScript
* Express
* Redis
* Docker
* OpenAPI / Swagger

---

## Available Endpoints

### Health

```http
GET /health
```

### Items

```http
GET /items
GET /items/{id}
```

### Traits

```http
GET /traits
GET /traits/{key}
```

### Profiles

```http
POST /profile/analyze
```

### Sessions

```http
POST /session
GET /session/{sessionId}
POST /session/{sessionId}/select
GET /session/{sessionId}/recommendations
```

---

## API Documentation

Swagger UI:

```txt
http://localhost:3000/docs
```

---

## Future Roadmap

### AI Feature Generation

Use AI to:

* Generate item traits
* Suggest weighted scores
* Detect semantic relationships
* Improve metadata quality

### Preference Modelling

Move beyond manually defined traits by:

* Learning preference patterns
* Identifying latent factors
* Discovering hidden correlations
* Refining recommendation signals

### Recommendation Intelligence

Explore:

* Content-based filtering
* Collaborative filtering
* Hybrid recommendation models
* Embedding-based similarity
* Vector search

### AI Explanations

Provide recommendation reasoning such as:

```txt
You may like Anime because your profile strongly aligns with:
- creative
- soothing
- fantasy-oriented content
```

### Research Areas

* Matrix Factorization
* Neural Collaborative Filtering
* Factorization Machines
* Embeddings
* Retrieval Systems
* Two-Tower Architectures
* Recommendation Ranking Models

---

## Philosophy

Taste Engine is not intended to be a black-box recommendation system.

The project explores how AI can become a core part of recommendation intelligence while keeping recommendations explainable, inspectable and understandable.

The current transparent scoring engine acts as a foundation upon which more advanced AI-driven recommendation systems can be built.
