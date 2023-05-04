const routeCalenderMovies = (selectedDay?: string) => `/calender-movies${selectedDay ? `?date=${selectedDay}` : ""}`;

export default routeCalenderMovies;
