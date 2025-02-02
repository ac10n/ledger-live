export type ManageBackupStepProps = {
  goToDeleteBackup: () => void;
};

export type DeleteBackupStepProps = {
  cancel: () => void;
  deleteBackup: () => void;
};

export type BackupDeletedProps = {
  isLoading: boolean;
  isSuccessful: boolean;
};
