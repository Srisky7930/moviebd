const Pagination = props => {
  const {prevPage, nextPage} = props

  const goToNextPage = () => {
    nextPage()
  }

  const goToPrevPage = () => {
    prevPage()
  }

  return (
    <div>
      <button onClick={goToPrevPage}> Previous </button>
      <button onClick={goToNextPage}> Next </button>
    </div>
  )
}

export default Pagination
