/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createCourseTrainer = /* GraphQL */ `
  mutation CreateCourseTrainer(
    $input: CreateCourseTrainerInput!
    $condition: ModelCourseTrainerConditionInput
  ) {
    createCourseTrainer(input: $input, condition: $condition) {
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
export const updateCourseTrainer = /* GraphQL */ `
  mutation UpdateCourseTrainer(
    $input: UpdateCourseTrainerInput!
    $condition: ModelCourseTrainerConditionInput
  ) {
    updateCourseTrainer(input: $input, condition: $condition) {
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
export const deleteCourseTrainer = /* GraphQL */ `
  mutation DeleteCourseTrainer(
    $input: DeleteCourseTrainerInput!
    $condition: ModelCourseTrainerConditionInput
  ) {
    deleteCourseTrainer(input: $input, condition: $condition) {
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
