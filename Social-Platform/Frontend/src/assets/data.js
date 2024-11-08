export const user = {
    _id: "64df3c064180b81adfe41d4b",
    firstName: "Kishn",
    lastName: "Kumar",
    email: "Example@gmail.com",
    friends: [
      {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Namrata",
        lastName: "Singh",
        email: "Example@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
        views: [],
        verified: true,
        createdAt: "2023-08-18T09:33:32.519Z",
        updatedAt: "2023-08-18T09:49:19.475Z",
        __v: 2,
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Vibhu",
        lastName: "Yadav",
        email: "Example@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
        views: [
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
        ],
        verified: true,
        createdAt: "2023-08-18T09:27:12.064Z",
        updatedAt: "2023-08-21T06:46:26.798Z",
        __v: 8,
        location: "Mumbai, India",
        profession: "Full-Stack Developer",
      },
      {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Tripti",
        lastName: "Khurana",
        email: "Example!@gmail.com",
        friends: ["64df3c064180b81adfe41d4b"],
        views: [],
        verified: true,
        createdAt: "2023-08-18T10:04:59.677Z",
        updatedAt: "2023-08-18T10:09:20.006Z",
        __v: 1,
      },
    ],
    views: [
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
    ],
    verified: true,
    createdAt: "2023-08-18T09:38:14.179Z",
    updatedAt: "2023-08-21T06:46:18.258Z",
    profileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
  };
  
  export const friends = [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Mayank",
      lastName: "Pal",
      email: "Example@gmail.com",
      profileUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Rachi",
      lastName: "kashyap",
      email: "Example@gmail.com",
      location: "Mumbai, India",
      profession: "Full-Stack Developer",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Anu",
      lastName: "Kashyap",
      email: "Example@gmail.com",
    },
  ];
  
  export const requests = [
    {
      _id: "64df3aec4180b81adfe41d32",
      requestFrom: friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      requestFrom: friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      requestFrom: friends[2],
    },
  ];
  
  export const suggest = [
    {
      _id: "64df3aec4180b81adfe41d32",
      ...friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      ...friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      ...friends[2],
    },
  ];
  export const posts = [
    {
      _id: "64e2fe620d7868ecff1a6a86",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Namrata",
        lastName: "Singh",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        location: "New York, USA",
      },
      description: "Hello everyone this is my first post.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      likes: ["64df3c064180b81adfe41d4b"],
      comments: [],
      createdAt: "2023-08-21T06:04:18.297Z",
      updatedAt: "2023-08-21T06:04:18.297Z",
      __v: 0,
    },
    {
      _id: "64e1cdd64baffca670364c8c",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Vibhu",
        lastName: "Yadav",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        location: "Mumbai, India",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2023-08-20T08:24:54.330Z",
      updatedAt: "2023-08-21T03:23:24.809Z",
      __v: 0,
    },
    {
      _id: "64df437e4a4c0d47b536a002",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Neel",
        lastName: "Bedi",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: ["64e2d1c977e497bd3a0bf67b"],
      createdAt: "2023-08-18T10:10:06.969Z",
      updatedAt: "2023-08-21T02:54:01.806Z",
      __v: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      _id: "64df43714a4c0d47b5369fef",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Tripti",
        lastName: "Khurana",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2023-08-18T10:09:53.009Z",
      updatedAt: "2023-08-21T03:35:18.541Z",
      __v: 0,
    },
    {
      _id: "64df42dc4a4c0d47b5369f8a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Anil",
        lastName: "Sodi",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: [],
      createdAt: "2023-08-18T10:07:24.023Z",
      updatedAt: "2023-08-18T10:11:00.348Z",
      __v: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      _id: "64df42b04a4c0d47b5369f77",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ravi",
        lastName: "Kumar",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: [],
      comments: [],
      createdAt: "2023-08-18T10:06:40.339Z",
      updatedAt: "2023-08-18T10:06:40.339Z",
      __v: 0,
    },
    {
      _id: "64df41114a4c0d47b5369f02",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Romaia",
        lastName: "Gurvinder",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2023-08-18T09:59:45.876Z",
      updatedAt: "2023-08-18T10:01:35.333Z",
      __v: 0,
    },
    {
      _id: "64df3ef86c2bd953c7b43193",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Khusi",
        lastName: "Prasad",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: [
        "64df3aec4180b81adfe41d32",
        "64df424b4a4c0d47b5369f65",
        "64df39704180b81adfe41d0b",
      ],
      comments: [
        "64df41304a4c0d47b5369f0d",
        "64df41b14a4c0d47b5369f4d",
        "64df43e04a4c0d47b536a02a",
      ],
      createdAt: "2023-08-18T09:50:48.398Z",
      updatedAt: "2023-08-21T03:36:36.745Z",
      __v: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      _id: "64df3ed06c2bd953c7b43172",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Kumar ",
        lastName: "kisan",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        location: "Mumbai, India",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      likes: ["64df39704180b81adfe41d0b"],
      comments: ["64e2dc8577e497bd3a0bf843"],
      createdAt: "2023-08-18T09:50:08.431Z",
      updatedAt: "2023-08-21T03:44:36.962Z",
      __v: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  ];
  
  export const postComments = [
    {
      _id: "64df43e04a4c0d47b536a02a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Namrata",
        lastName: "Khurana",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "gooooddd",
      from: "Namrata Singh",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: "2023-08-18T10:11:44.091Z",
      updatedAt: "2023-08-21T03:37:03.927Z",
      __v: 0,
    },
    {
      _id: "64df41b14a4c0d47b5369f4d",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Lakshita",
        lastName: "Omkaar",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        location: "Mumbai, India",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "i would like to have them in my house",
      from: "Naveen Rahane",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: "2023-08-18T10:02:25.492Z",
      updatedAt: "2023-08-21T03:27:57.602Z",
      __v: 0,
    },
    {
      _id: "64df41304a4c0d47b5369f0d",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Aakriti",
        lastName: "Rahane",
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "Nice!",
      from: "Aakriti Rahane",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [
        {
          userId: {
            _id: "64df39704180b81adfe41d0b",
            firstName: "Naveeen",
            lastName: "Solemn",
            profileUrl:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            location: "Mumbai, India",
          },
          from: "Naveeen solemon",
          replyAt: "Namrata Sigh",
          comment: "hahahah",
          created_At: "2023-08-18T10:01:08.771Z",
          updated_At: "2023-08-18T09:56:38.344Z",
          likes: [],
          _id: "64df41644a4c0d47b5369f24",
        },
      ],
      createdAt: "2023-08-18T10:00:16.352Z",
      updatedAt: "2023-08-18T10:01:14.090Z",
      __v: 1,
    },
  ];