import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { Link811 } from 'src/components/Link811';

export const SeverityBodyAches = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'bodyAches';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  let severityDescription = <div />;
  if (severity === Severity.Severe) {
    severityDescription = (
      <div className='mt-3'>
        <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
          You should get health advice. Call {Link811} or contact your health care provider.
        </Trans>
      </div>
    );
  }
  return (
    <SeverityQuestion symptom={symptom}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severityDescription}
        </div>
      ) : (
        ''
      )}
    </SeverityQuestion>
  );
};
