import * as React from "react"

function Logo(props) {
  return (
    <svg width={265} height={24} viewBox="0 0 265 24" fill="none" {...props}>
      <path
        d="M256.211 23.474v-1.628l1.579-.157v-10.45c0-.789-.369-1.104-.948-1.104-1.894 0-3.947.893-3.894 2.048l.157 9.348 1.632.315v1.628h-8.632v-1.628l1.843-.157V10.818c0-1.576.684-3.204 3.105-3.204 2.684 0 5.21.893 6.895 1.681l-.158-7.982 7.158.735v1.785L263 4.201v17.33l1.684.315v1.628h-8.473zM230.79 16.175c-.421 0-.421-.21-.421-.735.263-6.04 3.579-7.877 6.842-7.877 3.632 0 7.842 2.52 7.842 8.455 0 5.041-2.737 7.772-7.158 7.772-3.21 0-6.105-1.838-7.579-3.571l1.211-1.05c1.263 1.05 2.368 1.838 4 1.838 1.474 0 3.842-.526 4.105-4.832h-8.842zm8.895-1.89c-.105-3.94-.895-4.99-2.211-4.99-1.421 0-1.631 1.313-1.789 4.15-.053.472.105.84.684.84h3.316zM223.843 23.684c-2.264 0-4.106-.84-5.632-1.575l-.105 1.47-6.842-.525v-1.733l2 .158V1.313l7.526.682v1.89l-2.263.316-.158 3.624c.632-.106 1.947-.21 2.842-.21 3.737 0 7.737 2.52 7.737 8.297 0 4.569-1.474 7.772-5.105 7.772zm-3.842-2.52c1.894 0 3.684-1.628 3.684-5.567s-.474-6.092-2.211-6.092c-2 .105-3.21 1.365-3.21 2.206v8.245c.052.788.684 1.208 1.737 1.208zM201.842 24c-4.105 0-8.789-2.994-8.789-8.35 0-5.515 4.105-8.193 8.421-8.193 4 0 8.737 2.994 8.737 8.35.052 5.514-4 8.193-8.369 8.193zm-.21-1.89c2.105 0 3.052-3.257 3.052-6.723 0-3.204-.526-5.987-3-5.987-2 0-3.105 3.099-3.105 6.775 0 3.15.684 5.934 3.053 5.934zM183.053 23.475v-1.628l1.578-.21V11.396c0-.788-.421-1.26-.947-1.26-1.895 0-3.947.892-3.895 2.048l.158 9.295 1.632.368v1.628h-8.632v-1.628l1.842-.21V10.818c0-1.575.685-3.203 3.106-3.203 2.684 0 5.21.893 6.894 1.68l.106-1.785 6.894.42v1.838l-2 .998v10.713l2 .368v1.628h-8.736zM162.684 23.475v-1.628l2-.158V7.51l7.421.421v1.838l-2.264.998v10.766l2.264.315v1.628h-9.421zm4.736-17.173c-1.631 0-3.052-1.68-3.052-3.414 0-1.733 1.158-2.888 2.895-2.888 1.631 0 3 1.68 3 3.414 0 1.733-1.106 2.888-2.843 2.888zM154.316 23.842c-3.053 0-5.895-1.838-7.369-3.57l1.211-1.051c1.263 1.05 2.316 1.733 3.737 1.733 2.263 0 4.21-1.103 4.21-5.777 0-4.779-.789-5.777-2.947-5.777-.263 0-.632.105-.842.105.158 1.47.158 3.676 0 4.254-.421 1.68-4.79 1.103-4.737.42.158-4.674 2.842-6.67 6.052-6.67 2.895 0 8.001 1.786 8.001 8.666.052 4.831-2.685 7.667-7.316 7.667zM130.474 23.474v-1.628l2.474-.157v-9.768c0-.788-.263-1.26-.685-1.26-.947.262-1.684 2.048-4.263 2.048-1.105 0-1.526-3.204-.894-5.147 1.105-.525 4.894 1.26 5.947 1.996l.105-2.101 6.895.42v1.838l-2 .998v10.818l2 .316v1.627h-9.579zM112.157 16.175c-.421 0-.421-.21-.421-.735.263-6.04 3.579-7.877 6.842-7.877 3.632 0 7.842 2.52 7.842 8.455 0 5.041-2.736 7.772-7.157 7.772-3.211 0-6.106-1.838-7.579-3.571l1.21-1.05c1.263 1.05 2.369 1.838 4 1.838 1.474 0 3.842-.526 4.105-4.832h-8.842zm8.895-1.89c-.105-3.94-.895-4.99-2.211-4.99-1.421 0-1.631 1.313-1.789 4.15-.053.472.105.84.684.84h3.316zM100.632 23.79l-5.684-13.602-1.473-.473V7.982h5.368V9.61l-1.737.158 3.632 9.663 3.789-9.663-1.894-.158V7.982h8.684v1.733l-1.474.473-5.632 13.602h-3.579zM79.105 16.175c-.422 0-.422-.21-.422-.735.264-6.04 3.58-7.877 6.843-7.877 3.631 0 7.842 2.52 7.842 8.455 0 5.041-2.737 7.772-7.158 7.772-3.21 0-6.105-1.838-7.58-3.571l1.211-1.05c1.264 1.05 2.369 1.838 4 1.838 1.474 0 3.843-.526 4.106-4.832h-8.843zm8.842-1.89c-.106-3.94-.895-4.99-2.21-4.99-1.422 0-1.632 1.313-1.79 4.15-.053.472.105.84.684.84h3.316zM67.79 23.474v-1.628l2.474-.157v-9.768c0-.788-.263-1.26-.684-1.26-.948.262-1.684 2.048-4.263 2.048-1.105 0-1.527-3.204-.895-5.147 1.105-.525 4.895 1.26 5.947 1.996l.106-2.101 6.894.42v1.838l-2 .998v10.818l2 .316v1.627H67.79zM57.999 23.685c-4.421 0-7.526-1.733-7.526-5.41 0-5.303 7.79-4.2 7.79-7.3 0-1.522-1.422-1.732-3.106-1.732-.684 0-.947.105-1.684.21l-.58 2.993h-1.63l-.211-3.728c.947-.473 2.736-1.208 4.684-1.208 2.579 0 7.42.893 7.42 5.199 0 5.987-7.789 4.569-7.789 7.51 0 1.575 1.632 1.733 3.21 1.733.738 0 1.58-.158 2.264-.42l1.21-3.309 1.527.105-.158 4.096c-1.263.683-3 1.26-5.421 1.26zM45.474 23.685c-1.632 0-3.79-.893-5.421-1.733-.158 1.313-.79 1.628-1.527 1.575l-5.579-.472v-1.733l1.895.157V10.976c0-2.468.526-3.414 3.421-3.414 4.21 0 9.737 1.734 9.737 4.78 0 .787-2.526 1.89-4.684.892-.264-.105-.632-2.1-.421-3.57-1.421-.473-3.053.63-3.053 1.365l.105 3.676c3.58-.053 8.895.84 8.895 5.461 0 1.838-1.579 3.519-3.368 3.519zm-4.053-2.678c1.105 0 2.368-.946 2.368-2.206 0-1.418-2.052-2.52-3.842-2.52l.105 3.675c0 .736.369 1.05 1.369 1.05zM22.842 23.474v-1.628L25 21.69V1.312l7.42.736v1.785l-2.315.368v17.33l2 .315v1.628h-9.263zM11.579 16.91c-4.053 0-11.053-.105-11.053-.105L0 14.547s5.053-.21 9.21-.21c3.737 0 10.58.367 10.58.367l.21 2.101s-4.579.105-8.421.105z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Logo