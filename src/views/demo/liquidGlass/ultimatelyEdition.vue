<script setup></script>

<template>
  <div class="liquidGlass">
    <!-- <svg style="display: none">
      <filter
        id="liquid_glass_filter"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feDisplacementMap scale="200" />
      </filter>
    </svg> -->
    <svg style="display: none">
      <filter
        id="liquid_glass_filter"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <!-- <feDisplacementMap scale="200" /> -->
      </filter>
    </svg>

    <img
      src="https://plus.unsplash.com/premium_photo-1748960861503-99b1f5412a81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      alt=""
      style="display: block; width: 100%"
    />

    <div
      style="
        position: fixed;
        bottom: 16px;
        display: flex;
        gap: 16px;
        padding: 0 16px;
        margin-top: 20px;
      "
    >
      <div
        class="liquid_glass-wrapper"
        style="

          --border-radius: 60px;

          width: 54px;
          height: 54px;
        "
      >
        <div class="liquid_glass-outer"></div>
        <div class="liquid_glass-cover"></div>
        <div class="liquid_glass-sharp"></div>
        <div class="liquid_glass-reflect"></div>

        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255, 32, 86, 0.7)"
            style="width: 28px; height: 28px"
          >
            <path
              d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="liquid_glass-wrapper" style="

--border-radius: 26px">
        <div class="liquid_glass-outer"></div>
        <div class="liquid_glass-cover"></div>
        <div class="liquid_glass-sharp"></div>
        <div class="liquid_glass-reflect"></div>

        <div
          style="
            z-index: 5;
            display: flex;
            gap: 16px;
            align-items: center;
            width: 100%;
            padding: 0 24px;
          "
        >
          <img
            src="https://workos.imgix.net/images/d2e1f2a4-5994-4f38-b3f4-0c78c946b616.png?auto=format&fit=clip&q=80&w=500"
            alt=""
            style="width: 32px; height: 32px; border-radius: 5px"
          />

          <div style="margin-right: auto; color: rgb(255 255 255 / 80%)">
            <p style="font-size: 16px; font-weight: bold">Konoyo</p>
            <p style="font-size: 12px">Tim Hecker</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.8)"
            style="width: 28px; height: 28px"
          >
            <path
              d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.8)"
            style="width: 32px; height: 32px"
          >
            <path
              d="M12 13.3334L2.77735 19.4818C2.54759 19.635 2.23715 19.5729 2.08397 19.3432C2.02922 19.261 2 19.1645 2 19.0658V4.93433C2 4.65818 2.22386 4.43433 2.5 4.43433C2.59871 4.43433 2.69522 4.46355 2.77735 4.5183L12 10.6667V4.93433C12 4.65818 12.2239 4.43433 12.5 4.43433C12.5987 4.43433 12.6952 4.46355 12.7774 4.5183L23.376 11.584C23.6057 11.7372 23.6678 12.0477 23.5146 12.2774C23.478 12.3323 23.4309 12.3795 23.376 12.4161L12.7774 19.4818C12.5476 19.635 12.2372 19.5729 12.084 19.3432C12.0292 19.261 12 19.1645 12 19.0658V13.3334Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        class="liquid_glass-wrapper"
        style="

          --border-radius: 60px;

          width: 54px;
          height: 54px;
        "
      >
        <div class="liquid_glass-outer"></div>
        <div class="liquid_glass-cover"></div>
        <div class="liquid_glass-sharp"></div>
        <div class="liquid_glass-reflect"></div>

        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255, 0.8)"
            style="width: 28px; height: 28px"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.liquidGlass {
  overflow: auto;
}

p {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.liquid_glass-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: var(--border-radius);
}

.liquid_glass-outer {
  position: absolute;
  inset: 0;
  z-index: 0;
  backdrop-filter: url('#liquid_glass_filter');
  border-radius: var(--border-radius);
  mask-image:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="white"/></svg>'),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect x="5" y="5" width="calc(100% - 10px)" height="calc(100% - 10px)" rx="21" ry="21" fill="white"/></svg>');
  mask-composite: exclude;
}

.liquid_glass-cover {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: rgb(0 0 0 / 12%);
  backdrop-filter: blur(2px);
  border-radius: var(--border-radius);
}

.liquid_glass-sharp {
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: var(--border-radius);
  box-shadow:
    inset 1px 1px 0 0 rgb(255 255 255 / 50%),
    inset -1px -1px 0 0 rgb(255 255 255 / 60%);
}

.liquid_glass-reflect {
  position: absolute;
  inset: 1px;
  z-index: 2;
  border-radius: var(--border-radius);
  box-shadow:
    inset 2px 2px 6px 2px rgb(255 255 255 / 20%),
    inset -2px -2px 4px -1px rgb(255 255 255 / 20%);
}

.icon {
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
