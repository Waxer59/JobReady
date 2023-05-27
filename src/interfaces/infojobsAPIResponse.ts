export interface InfojobsOfferResponse {
  title: string
  id: string
  state: number
  creationDate: string
  updateDate: string
  city: string
  externalUrlForm: string
  blocked: boolean
  applications: number
  province: Category
  experienceMin: Category
  category: Category
  subcategories: Subcategory[]
  studiesMin: Category
  residence: Category
  country: Category
  contractType: Category
  journey: Category
  profile: Profile
  cityPD: number
  zipCode: string
  latitude: number
  longitude: number
  exactLocation: boolean
  department: string
  vacancies: number
  minRequirements: string
  description: string
  desiredRequirements: string
  commissions: string
  contractDuration: string
  referenceId: string
  detailedStudiesId: number
  studying: boolean
  showPay: boolean
  maxPay: Pay
  minPay: Pay
  schedule: string
  jobLevel: Category
  staffInCharge: Category
  hasKillerQuestions: number
  hasOpenQuestions: number
  upsellings: Upsellings
  link: string
  active: boolean
  archived: boolean
  deleted: boolean
  disponibleForFullVisualization: boolean
  availableForVisualization: boolean
  subsegment: number
  skillsList: SkillsList
  epreselec: boolean
  fiscalAddress: string
}

export interface Category {
  id: number
  value: string
}

export interface Pay {
  amount: number
  amountId: number
  periodId: number
  periodValue: string
  amountValue: string
}

export interface Profile {
  id: string
  name: string
  description: string
  province: Category
  numberWorkers: number
  url: string
  corporateWebsiteUrl: string
  websiteUrl: string
  hidden: boolean
  typeIndustry: Category
  country: Category
  corporateResponsive: boolean
  showCorporativeHeader: boolean
  clientId: number
  logoUrl?: string
}

export interface SkillsList {
  skill: string
}

export interface Subcategory {
  id: number
  value: string
  order: number
  key: string
  parent: number
}

export interface Upsellings {
  highlightColor: boolean
  highlightUrgent: boolean
  highlightHomeMonth: boolean
  highlightHomeWeek: boolean
  highlightSubcategory: boolean
  highlightLogo: boolean
  highlightStandingOffer: boolean
}
