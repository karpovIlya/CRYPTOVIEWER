<template lang="">
  <div>
    <base-search
      search-input-id="base-input"
      :tickets-titles="['BTC', 'XRP', 'ETH', 'DOGE', 'GEI_COIN']"
      @found="(foundTicketTitle: string) => console.log(foundTicketTitle)"
    />
  </div>
</template>
