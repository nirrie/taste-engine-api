const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Taste Engine API",
    version: "1.0.0",
    description: "Taste Engine recommendation API",
  },
  servers: [{ url: "http://localhost:3000" }],
  paths: {
    "/health": {
      get: {
        summary: "Health check",
        responses: {
          "200": { description: "Service is healthy" },
        },
      },
    },

    "/items": {
      get: {
        summary: "Get all taste items",
        responses: {
          "200": {
            description: "List of available taste items",
            content: {
              "application/json": {
                example: {
                  count: 22,
                  data: [
                    {
                      id: "1",
                      title: "Fiji water",
                      traits: [
                        { key: "aesthetic", weight: 0.8, source: "manual" },
                        { key: "luxury", weight: 0.6, source: "manual" },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },

    "/items/{id}": {
      get: {
        summary: "Get a taste item by id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "7",
          },
        ],
        responses: {
          "200": {
            description: "Taste item found",
            content: {
              "application/json": {
                example: {
                  data: {
                    id: "7",
                    title: "Journaling",
                    traits: [
                      { key: "warm", weight: 0.7, source: "manual" },
                      { key: "thinker", weight: 0.8, source: "manual" },
                      { key: "soothing", weight: 0.6, source: "manual" },
                      { key: "creative", weight: 0.8, source: "manual" },
                    ],
                  },
                },
              },
            },
          },
          "404": {
            description: "Item not found",
            content: {
              "application/json": {
                example: { error: "Item not found" },
              },
            },
          },
        },
      },
    },

    "/traits": {
      get: {
        summary: "Get all traits",
        responses: {
          "200": {
            description: "List of available traits",
            content: {
              "application/json": {
                example: {
                  count: 1,
                  data: [
                    {
                      key: "soothing",
                      label: "Soothing",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },

    "/traits/{key}": {
      get: {
        summary: "Get a trait by key",
        parameters: [
          {
            name: "key",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "soothing",
          },
        ],
        responses: {
          "200": { description: "Trait found" },
          "404": { description: "Trait not found" },
        },
      },
    },

    "/profile/analyze": {
      post: {
        summary: "Analyze a profile from selected item ids",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                selectedItemIds: ["7", "18"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Calculated profile",
            content: {
              "application/json": {
                example: {
                  selectedItems: [
                    {
                      id: "7",
                      title: "Journaling",
                      traits: [
                        { key: "warm", weight: 0.7, source: "manual" },
                        { key: "thinker", weight: 0.8, source: "manual" },
                        { key: "soothing", weight: 0.6, source: "manual" },
                        { key: "creative", weight: 0.8, source: "manual" },
                      ],
                    },
                    {
                      id: "18",
                      title: "Camping",
                      traits: [
                        { key: "adventurous", weight: 0.8, source: "manual" },
                        { key: "calm", weight: 0.7, source: "manual" },
                        { key: "introverted", weight: 0.6, source: "manual" },
                        { key: "soothing", weight: 0.6, source: "manual" },
                      ],
                    },
                  ],
                  profile: {
                    warm: 0.7,
                    thinker: 0.8,
                    soothing: 1.2,
                    creative: 0.8,
                    adventurous: 0.8,
                    calm: 0.7,
                    introverted: 0.6,
                  },
                  rankedProfile: [
                    { trait: "soothing", score: 1.2 },
                    { trait: "thinker", score: 0.8 },
                    { trait: "creative", score: 0.8 },
                    { trait: "adventurous", score: 0.8 },
                    { trait: "warm", score: 0.7 },
                    { trait: "calm", score: 0.7 },
                    { trait: "introverted", score: 0.6 },
                  ],
                },
              },
            },
          },
          "400": {
            description: "Invalid request body",
          },
        },
      },
    },

    "/session": {
      post: {
        summary: "Create a new taste session",
        responses: {
          "201": {
            description: "Session created",
            content: {
              "application/json": {
                example: {
                  data: {
                    sessionId: "14b42273-37d1-401b-87ce-05675a37d4f4",
                    selectedItemIds: [],
                    createdAt: "2026-06-08T08:12:34.974Z",
                  },
                },
              },
            },
          },
        },
      },
    },

    "/session/{sessionId}": {
      get: {
        summary: "Get a session with calculated profile",
        parameters: [
          {
            name: "sessionId",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "14b42273-37d1-401b-87ce-05675a37d4f4",
          },
        ],
        responses: {
          "200": {
            description: "Session found",
            content: {
              "application/json": {
                example: {
                  data: {
                    sessionId: "14b42273-37d1-401b-87ce-05675a37d4f4",
                    selectedItemIds: ["7", "18"],
                    createdAt: "2026-06-08T08:12:34.974Z",
                    profile: {
                      warm: 0.7,
                      thinker: 0.8,
                      soothing: 1.2,
                      creative: 0.8,
                      adventurous: 0.8,
                      calm: 0.7,
                      introverted: 0.6,
                    },
                    rankedProfile: [
                      { trait: "soothing", score: 1.2 },
                      { trait: "thinker", score: 0.8 },
                      { trait: "creative", score: 0.8 },
                      { trait: "adventurous", score: 0.8 },
                      { trait: "warm", score: 0.7 },
                      { trait: "calm", score: 0.7 },
                      { trait: "introverted", score: 0.6 },
                    ],
                  },
                },
              },
            },
          },
          "404": {
            description: "Session not found",
          },
        },
      },
    },

    "/session/{sessionId}/select": {
      post: {
        summary: "Select an item for a session",
        parameters: [
          {
            name: "sessionId",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "14b42273-37d1-401b-87ce-05675a37d4f4",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                itemId: "18",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Item selected and profile updated",
            content: {
              "application/json": {
                example: {
                  data: {
                    sessionId: "14b42273-37d1-401b-87ce-05675a37d4f4",
                    selectedItemIds: ["7", "18"],
                    createdAt: "2026-06-08T08:12:34.974Z",
                    profile: {
                      warm: 0.7,
                      thinker: 0.8,
                      soothing: 1.2,
                      creative: 0.8,
                      adventurous: 0.8,
                      calm: 0.7,
                      introverted: 0.6,
                    },
                    rankedProfile: [
                      { trait: "soothing", score: 1.2 },
                      { trait: "thinker", score: 0.8 },
                      { trait: "creative", score: 0.8 },
                      { trait: "adventurous", score: 0.8 },
                      { trait: "warm", score: 0.7 },
                      { trait: "calm", score: 0.7 },
                      { trait: "introverted", score: 0.6 },
                    ],
                  },
                },
              },
            },
          },
          "400": {
            description: "Invalid itemId",
          },
          "404": {
            description: "Session or item not found",
          },
        },
      },
    },
  },
};

export default openApiSpec;