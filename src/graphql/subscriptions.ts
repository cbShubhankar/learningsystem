/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($owner: String) {
    onCreateCourse(owner: $owner) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($owner: String) {
    onUpdateCourse(owner: $owner) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($owner: String) {
    onDeleteCourse(owner: $owner) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($owner: String) {
    onCreateStudent(owner: $owner) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($owner: String) {
    onUpdateStudent(owner: $owner) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($owner: String) {
    onDeleteStudent(owner: $owner) {
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
export const onCreateCourseTrainer = /* GraphQL */ `
  subscription OnCreateCourseTrainer($owner: String) {
    onCreateCourseTrainer(owner: $owner) {
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
export const onUpdateCourseTrainer = /* GraphQL */ `
  subscription OnUpdateCourseTrainer($owner: String) {
    onUpdateCourseTrainer(owner: $owner) {
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
export const onDeleteCourseTrainer = /* GraphQL */ `
  subscription OnDeleteCourseTrainer($owner: String) {
    onDeleteCourseTrainer(owner: $owner) {
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
