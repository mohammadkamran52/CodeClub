export function getUpcomingEvents(events, count) {
    const upcomingEvents = events.filter((event) => event.status === "upcoming");
    if (upcomingEvents.length === 0) {
        return null;
    }
    upcomingEvents.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
    return upcomingEvents.slice(0, count);
}