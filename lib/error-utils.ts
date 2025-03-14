/**
 * Formats an error object into a standardized format
 */
export function formatError(error: any): { message: string; code?: string } {
  // Handle empty or null error
  if (!error || Object.keys(error).length === 0) {
    return {
      message: "An unknown error occurred. Please try again.",
      code: "unknown_error",
    }
  }

  // Handle Supabase errors
  if (error.code || error.status || error.statusCode) {
    return {
      message: error.message || error.error_description || "An error occurred",
      code: error.code || error.status || error.statusCode,
    }
  }

  // Handle string errors
  if (typeof error === "string") {
    return {
      message: error,
      code: "string_error",
    }
  }

  // Handle Error objects
  if (error instanceof Error) {
    return {
      message: error.message,
      code: error.name,
    }
  }

  // Default case
  return {
    message: "An unexpected error occurred. Please try again.",
    code: "unexpected_error",
  }
}

/**
 * Logs an error with consistent formatting
 */
export function logError(context: string, error: any): void {
  console.error(`[${context}] Error:`, error)

  if (error && typeof error === "object") {
    if (error.message) console.error(`[${context}] Message:`, error.message)
    if (error.code) console.error(`[${context}] Code:`, error.code)
    if (error.status) console.error(`[${context}] Status:`, error.status)
    if (error.statusCode) console.error(`[${context}] Status Code:`, error.statusCode)
  }
}

