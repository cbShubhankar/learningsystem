/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      role
      course {
        items {
          id
          userID
          courseID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      student {
        items {
          progress
          grade
          id
          createdAt
          updatedAt
          userStudentId
          courseStudentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        role
        course {
          nextToken
        }
        student {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      title
      trainers {
        items {
          id
          userID
          courseID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      students {
        items {
          progress
          grade
          id
          createdAt
          updatedAt
          userStudentId
          courseStudentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $id: ID
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        title
        trainers {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      progress
      student {
        id
        name
        role
        course {
          nextToken
        }
        student {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      grade
      gradeBy {
        id
        name
        role
        course {
          nextToken
        }
        student {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      course {
        id
        name
        title
        trainers {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      userStudentId
      courseStudentsId
      owner
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        progress
        student {
          id
          name
          role
          createdAt
          updatedAt
          owner
        }
        grade
        gradeBy {
          id
          name
          role
          createdAt
          updatedAt
          owner
        }
        course {
          id
          name
          title
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        userStudentId
        courseStudentsId
        owner
      }
      nextToken
    }
  }
`;
export const getCourseTrainer = /* GraphQL */ `
  query GetCourseTrainer($id: ID!) {
    getCourseTrainer(id: $id) {
      id
      userID
      courseID
      user {
        id
        name
        role
        course {
          nextToken
        }
        student {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      course {
        id
        name
        title
        trainers {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourseTrainers = /* GraphQL */ `
  query ListCourseTrainers(
    $filter: ModelCourseTrainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseTrainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        courseID
        user {
          id
          name
          role
          createdAt
          updatedAt
          owner
        }
        course {
          id
          name
          title
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
