import { ValidateOptions, Validate } from 'payload'

// Create a type for documents with publication status
export interface WithPublicationStatus {
  publicationStatus?: 'draft' | 'published'
}

// Universal validation function
export const requiredToPublish = () => {
  const validateFn = (value: any, { data }: { data: WithPublicationStatus }): string | true => {
    if (
      data?.publicationStatus === 'published' &&
      (value === undefined ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0))
    ) {
      return 'This field is required when content is published'
    }
    return true
  }

  // This makes the function compatible with all field validation types
  return validateFn as any
}
