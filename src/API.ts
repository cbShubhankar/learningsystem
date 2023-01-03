/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  role: UserType,
};

export enum UserType {
  trainer = "trainer",
  trainee = "trainee",
  admin = "admin",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelUserTypeInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  role: UserType,
  course?: ModelCourseTrainerConnection | null,
  student?: ModelStudentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCourseTrainerConnection = {
  __typename: "ModelCourseTrainerConnection",
  items:  Array<CourseTrainer | null >,
  nextToken?: string | null,
};

export type CourseTrainer = {
  __typename: "CourseTrainer",
  id: string,
  userID: string,
  courseID: string,
  user: User,
  course: Course,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  title: string,
  trainers?: ModelCourseTrainerConnection | null,
  students?: ModelStudentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type Student = {
  __typename: "Student",
  progress: Progress,
  student?: User | null,
  grade: string,
  gradeBy: User,
  course?: Course | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userStudentId?: string | null,
  courseStudentsId: string,
  owner?: string | null,
};

export enum Progress {
  inProgress = "inProgress",
  pending = "pending",
  complete = "complete",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  role?: UserType | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  title: string,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  title?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateStudentInput = {
  progress: Progress,
  grade: string,
  id?: string | null,
  userStudentId?: string | null,
  courseStudentsId: string,
};

export type ModelStudentConditionInput = {
  progress?: ModelProgressInput | null,
  grade?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  userStudentId?: ModelIDInput | null,
  courseStudentsId?: ModelIDInput | null,
};

export type ModelProgressInput = {
  eq?: Progress | null,
  ne?: Progress | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateStudentInput = {
  progress?: Progress | null,
  grade?: string | null,
  id: string,
  userStudentId?: string | null,
  courseStudentsId: string,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateCourseTrainerInput = {
  id?: string | null,
  userID: string,
  courseID: string,
};

export type ModelCourseTrainerConditionInput = {
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelCourseTrainerConditionInput | null > | null,
  or?: Array< ModelCourseTrainerConditionInput | null > | null,
  not?: ModelCourseTrainerConditionInput | null,
};

export type UpdateCourseTrainerInput = {
  id: string,
  userID?: string | null,
  courseID?: string | null,
};

export type DeleteCourseTrainerInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelUserTypeInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelStudentFilterInput = {
  progress?: ModelProgressInput | null,
  grade?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  userStudentId?: ModelIDInput | null,
  courseStudentsId?: ModelIDInput | null,
};

export type ModelCourseTrainerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelCourseTrainerFilterInput | null > | null,
  or?: Array< ModelCourseTrainerFilterInput | null > | null,
  not?: ModelCourseTrainerFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type CreateCourseTrainerMutationVariables = {
  input: CreateCourseTrainerInput,
  condition?: ModelCourseTrainerConditionInput | null,
};

export type CreateCourseTrainerMutation = {
  createCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCourseTrainerMutationVariables = {
  input: UpdateCourseTrainerInput,
  condition?: ModelCourseTrainerConditionInput | null,
};

export type UpdateCourseTrainerMutation = {
  updateCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCourseTrainerMutationVariables = {
  input: DeleteCourseTrainerInput,
  condition?: ModelCourseTrainerConditionInput | null,
};

export type DeleteCourseTrainerMutation = {
  deleteCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  id?: string | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      progress: Progress,
      student?:  {
        __typename: "User",
        id: string,
        name: string,
        role: UserType,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      grade: string,
      gradeBy:  {
        __typename: "User",
        id: string,
        name: string,
        role: UserType,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      course?:  {
        __typename: "Course",
        id: string,
        name: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userStudentId?: string | null,
      courseStudentsId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseTrainerQueryVariables = {
  id: string,
};

export type GetCourseTrainerQuery = {
  getCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCourseTrainersQueryVariables = {
  filter?: ModelCourseTrainerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseTrainersQuery = {
  listCourseTrainers?:  {
    __typename: "ModelCourseTrainerConnection",
    items:  Array< {
      __typename: "CourseTrainer",
      id: string,
      userID: string,
      courseID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        role: UserType,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      course:  {
        __typename: "Course",
        id: string,
        name: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: UserType,
    course?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    student?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    title: string,
    trainers?:  {
      __typename: "ModelCourseTrainerConnection",
      items:  Array< {
        __typename: "CourseTrainer",
        id: string,
        userID: string,
        courseID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        progress: Progress,
        grade: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userStudentId?: string | null,
        courseStudentsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    progress: Progress,
    student?:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grade: string,
    gradeBy:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userStudentId?: string | null,
    courseStudentsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseTrainerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCourseTrainerSubscription = {
  onCreateCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseTrainerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCourseTrainerSubscription = {
  onUpdateCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseTrainerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCourseTrainerSubscription = {
  onDeleteCourseTrainer?:  {
    __typename: "CourseTrainer",
    id: string,
    userID: string,
    courseID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      role: UserType,
      course?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      student?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    course:  {
      __typename: "Course",
      id: string,
      name: string,
      title: string,
      trainers?:  {
        __typename: "ModelCourseTrainerConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
