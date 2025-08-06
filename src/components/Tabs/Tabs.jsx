export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabIds = tabs.map(tab => tab.id);
  const currentActiveId = validTabIds.includes(activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={tab.id === currentActiveId ? 'is-active' : ''}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              if (tab.id !== currentActiveId) {
                onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
