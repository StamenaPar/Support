import { IAnswer } from '../Answers/types'
import { IOption } from '../common/types';
import { IUser } from '../user/types';

// Define the Question type

export interface IQuestionAnswer {
	answerId: number,
	assignedBy: number,
	assigned: Date,
	text?: string
}

export interface IQuestionAnswerJson extends Omit<IQuestionAnswer, 'assigned'> {
	assigned: string
}


export interface IQuestion {
	categoryId: number,
	questionId: number,
	text: string,
	words?: string[],
	answers: IQuestionAnswer[],
	source: number,
	status: number,
	createdBy: number,
	created: Date
}

export interface IQuestionJson extends Omit<IQuestion, 'categoryId' | 'answers' | 'created'> {
	categoryId?: number,
	answers: IQuestionAnswerJson[],
	created: string
}

export interface ICategory {
	categoryId: number,
	title: string,
	questions: IQuestion[],
	isExpanded?: boolean,
	createdBy: number,
	created: Date
}

export interface ICategoryJson extends Omit<ICategory, 'created'| 'questions'> {
	questions: IQuestionJson[],
	created: string
}



export const initialQuestion: IQuestion = {
	categoryId: 0,
	questionId: 0,
	text: '',
	words: [],
	answers: [],
	source: 0,
	status: 0,
	createdBy: 0,
	created: new Date()
 };

 export interface IComponentProps {
	categories: ICategory[];
	categoryOptions: IOption<number>[],
	question?: IQuestion;
	lastAnswer?: IAnswer;
	formMode: string,
	categoryIdEditing: number,
	canEdit: boolean,
	who: IUser,
	onSelectQuestion: (questionId: number) => IQuestion;
	add: (categoryId: number, text: string, canEdit?: boolean) => void;
	edit: (categoryId: number, questionId: number) => void;
	remove: (categoryId: number, questionId: number) => void;
	// groups
	addCategory: () => void;
	toggleCategory: (categoryId: number) => void;
	editCategory: (categoryId: number) => void;
	removeCategory: (categoryId: number) => void;
	storeCategory: (group: ICategory) => void;
	// question answer
	addAndAssignNewAnswer: (categoryId: number, questionId: number, answer: IAnswer, formMode: string) => void
}

// Define the Question State
export interface ICategoriesState {
	readonly categories: ICategory[];
	readonly question: IQuestion | undefined;
	categoryOptions: IOption<number>[];
	loading: boolean,
	formMode: string;
	categoryIdEditing: number;
	isDetail: boolean
}

export interface ICategoryState {
	questions: IQuestion[];
}

export interface IFormProps {
	question: IQuestion;
	questionAnswers: IQuestionAnswer[];
	answers: IAnswer[];
	formMode: string;
	canEdit: boolean,
	cancel: () => void;
	saveForm: (question: IQuestion, formMode: string) => void;
	selectQuestionAnswer: (categoryId: number, questionId: number, answerId: number) => void;
	copyQuestionAnswer: (categoryId: number, questionId: number, answerId: number) => void;
	removeQuestionAnswer: (categoryId: number, questionId: number, answerId: number) => void;
	assignQuestionAnswer: (categoryId: number, questionId: number, answerId: number) => void;
	setIsDetail: (isDetail: boolean) => void;
	categoryOptions: IOption<number>[];
  }
