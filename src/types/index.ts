export interface Service {
    id: string
    name: string
    description: string
    price: string
  
  }
  
  export interface Instructor {
    name: string
    experience: number
    certifications: string[]
    bio: string
    image: string
  }
  
  export interface Area {
    name: string
    coverage: string
  }