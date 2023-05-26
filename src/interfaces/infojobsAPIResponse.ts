export interface InfoJobsOfferResponse {
  currentPage: number
  pageSize: number
  totalResults: number
  currentResults: number
  totalPages: number
  availableSortingMethods: string[]
  sortBy: string
  sinceDate: string
  facets: Facet[]
  queryParameters: QueryParameters
  offers: Offer[]
}

export interface Facet {
  key: string
  name: string
  values: Value[]
}

export interface Value {
  key: string
  value: string
  count: number
}

export interface Offer {
  id: string
  title: string
  province: Category
  city: string
  link: string
  category: Category
  contractType: Category
  subcategory: Category
  salaryMin: Category
  salaryMax: Category
  salaryPeriod: Category
  experienceMin: Category
  workDay: Category
  study: Category
  teleworking: Category
  published: string
  updated: string
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  executive: boolean
  salaryDescription: string
  multiProvince: boolean
}

export interface Author {
  id: string
  privateId: number
  name: string
  uri: string
  logoUrl: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
}

export interface Category {
  id: number
  value: string
}

export interface QueryParameters {
  study: any[]
  province: string[]
  salaryPeriod: string
  city: any[]
  contractType: any[]
  query: string
  experienceMin: any[]
  category: string[]
  workDay: any[]
  teleworking: any[]
}
